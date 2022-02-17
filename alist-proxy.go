package main

import (
	"bytes"
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/url"
	"path"
	"strings"
)

type Header struct {
	Name  string `json:"name"`
	Value string `json:"value"`
}

type Link struct {
	Url     string   `json:"url"`
	Headers []Header `json:"headers"`
}

type Resp struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Data    Link   `json:"data"`
}

var (
	port              int
	https             bool
	help              bool
	certFile, keyFile string
	host, token       string
)

func init() {
	flag.IntVar(&port, "port", 5243, "the proxy port.")
	flag.BoolVar(&https, "https", false, "use https protocol.")
	flag.BoolVar(&help, "help", false, "show help")
	flag.StringVar(&certFile, "cert", "server.crt", "cert file")
	flag.StringVar(&keyFile, "key", "server.key", "key file")
	flag.StringVar(&host, "host", "", "alist host")
	flag.StringVar(&token, "token", "", "alist token")
	flag.Parse()
}

func Md5(data []byte) string {
	h := md5.New()
	h.Write(data)
	return hex.EncodeToString(h.Sum(nil))
}

func Sign(fileName string) string {
	md516 := Md5([]byte(fmt.Sprintf("alist-%s-%s", token, fileName)))[8:24]
	return md516
}

var HttpClient = &http.Client{}

func proxyHandle(w http.ResponseWriter, r *http.Request) {
	sign := r.URL.Query().Get("sign")
	if len(sign) == 16 {
		downHandle(w, r)
	} else {
		apiHandle(w, r)
	}
}

type Json map[string]interface{}

type Result struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
}

func errorResponse(w http.ResponseWriter, code int, msg string) {
	w.Header().Set("content-type", "text/json")
	res, _ := json.Marshal(Result{Code: code, Msg: msg})
	w.WriteHeader(200)
	_, _ = w.Write(res)
}

func downHandle(w http.ResponseWriter, r *http.Request) {
	sign := r.URL.Query().Get("sign")
	filePath := r.URL.Path
	fileName := path.Base(filePath)
	if sign != Sign(fileName) {
		errorResponse(w, 401, "sign mismatch")
		return
	}
	data := Json{
		"path": filePath,
	}
	dataByte, _ := json.Marshal(data)
	req, _ := http.NewRequest("POST", fmt.Sprintf("%s/api/admin/link", host), bytes.NewBuffer(dataByte))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", token)
	res, err := HttpClient.Do(req)
	if err != nil {
		errorResponse(w, 500, err.Error())
		return
	}
	defer func() {
		_ = res.Body.Close()
	}()
	dataByte, err = ioutil.ReadAll(res.Body)
	if err != nil {
		errorResponse(w, 500, err.Error())
		return
	}
	var resp Resp
	err = json.Unmarshal(dataByte, &resp)
	if err != nil {
		errorResponse(w, 500, err.Error())
		return
	}
	if resp.Code != 200 {
		errorResponse(w, resp.Code, resp.Message)
		return
	}
	if !strings.HasPrefix(resp.Data.Url, "http") {
		resp.Data.Url = "http:" + resp.Data.Url
	}
	fmt.Println("proxy:", resp.Data.Url)
	if err != nil {
		errorResponse(w, 500, err.Error())
		return
	}
	req2, _ := http.NewRequest(r.Method, resp.Data.Url, nil)
	for h, val := range r.Header {
		req2.Header[h] = val
	}
	headers := resp.Data.Headers
	if headers != nil {
		for _, header := range headers {
			req2.Header.Set(header.Name, header.Value)
		}
	}
	res2, err := HttpClient.Do(req2)
	if err != nil {
		errorResponse(w, 500, err.Error())
		return
	}
	defer func() {
		_ = res2.Body.Close()
	}()
	w.WriteHeader(res.StatusCode)
	for h, v := range res2.Header {
		if strings.ToLower(h) == strings.ToLower("Access-Control-Allow-Origin") {
			continue
		}
		w.Header()[h] = v
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	w.Header().Add("Access-Control-Allow-Headers", "range")
	_, err = io.Copy(w, res2.Body)
	if err != nil {
		errorResponse(w, 500, err.Error())
		return
	}
}

func apiHandle(w http.ResponseWriter, r *http.Request) {
	targetUrl := r.URL.Path[1:] + "?" + r.URL.Query().Encode()
	u, err := url.Parse(targetUrl)
	if err != nil {
		errorResponse(w, 500, err.Error())
		return
	}
	req, _ := http.NewRequest(r.Method, targetUrl, r.Body)
	for h, val := range r.Header {
		req.Header[h] = val
	}
	req.Host = u.Host
	res, err := HttpClient.Do(req)
	if err != nil {
		errorResponse(w, 500, err.Error())
		return
	}
	defer func() {
		_ = res.Body.Close()
	}()
	w.WriteHeader(res.StatusCode)
	for h, v := range res.Header {
		w.Header()[h] = v
	}
	_, err = io.Copy(w, res.Body)
	if err != nil {
		errorResponse(w, 500, err.Error())
		return
	}
}

func main() {
	if help {
		flag.Usage()
		return
	}
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("listen and serve: %s\n", addr)
	s := http.Server{
		Addr:    addr,
		Handler: http.HandlerFunc(proxyHandle),
	}
	if !https {
		if err := s.ListenAndServe(); err != nil {
			fmt.Printf("failed to start: %s\n", err.Error())
		}
	} else {
		if err := s.ListenAndServeTLS(certFile, keyFile); err != nil {
			fmt.Printf("failed to start: %s\n", err.Error())
		}
	}
}
