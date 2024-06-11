// src/const.ts
var ADDRESS = "YOUR_ADDRESS";
var TOKEN = "YOUR_TOKEN";
var WORKER_ADDRESS = "YOUR_WORKER_ADDRESS";

// src/verify.ts
var verify = async (data, _sign) => {
  const signSlice = _sign.split(":");
  if (!signSlice[signSlice.length - 1]) {
    return "expire missing";
  }
  const expire = parseInt(signSlice[signSlice.length - 1]);
  if (isNaN(expire)) {
    return "expire invalid";
  }
  if (expire < Date.now() / 1e3 && expire > 0) {
    return "expire expired";
  }
  const right = await hmacSha256Sign(data, expire);
  if (_sign !== right) {
    return "sign mismatch";
  }
  return "";
};
var hmacSha256Sign = async (data, expire) => {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(TOKEN),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
  const buf = await crypto.subtle.sign(
    {
      name: "HMAC",
      hash: "SHA-256"
    },
    key,
    new TextEncoder().encode(`${data}:${expire}`)
  );
  return btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_") + ":" + expire;
};

// src/handleDownload.ts
async function handleDownload(request) {
  const origin = request.headers.get("origin") ?? "*";
  const url = new URL(request.url);
  const path = decodeURIComponent(url.pathname);
  const sign = url.searchParams.get("sign") ?? "";
  const verifyResult = await verify(path, sign);
  if (verifyResult !== "") {
    const resp2 = new Response(
      JSON.stringify({
        code: 401,
        message: verifyResult
      }),
      {
        headers: {
          "content-type": "application/json;charset=UTF-8"
        }
      }
    );
    resp2.headers.set("Access-Control-Allow-Origin", origin);
    return resp2;
  }
  let resp = await fetch(`${ADDRESS}/api/fs/link`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: TOKEN
    },
    body: JSON.stringify({
      path
    })
  });
  let res = await resp.json();
  if (res.code !== 200) {
    return new Response(JSON.stringify(res));
  }
  request = new Request(res.data.url, request);
  if (res.data.header) {
    for (const k in res.data.header) {
      for (const v of res.data.header[k]) {
        request.headers.set(k, v);
      }
    }
  }
  let response = await fetch(request);
  while (response.status >= 300 && response.status < 400) {
    const location = response.headers.get("Location");
    if (location) {
      if (location.startsWith(`${WORKER_ADDRESS}/`)) {
        request = new Request(location, request);
        return await handleRequest(request);
      } else {
        request = new Request(location, request);
        response = await fetch(request);
      }
    } else {
      break;
    }
  }
  response = new Response(response.body, response);
  response.headers.delete("set-cookie");
  response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.append("Vary", "Origin");
  return response;
}

// src/handleOptions.ts
function handleOptions(request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400"
  };
  let headers = request.headers;
  if (headers.get("Origin") !== null && headers.get("Access-Control-Request-Method") !== null) {
    let respHeaders = {
      ...corsHeaders,
      "Access-Control-Allow-Headers": request.headers.get("Access-Control-Request-Headers") || ""
    };
    return new Response(null, {
      headers: respHeaders
    });
  } else {
    return new Response(null, {
      headers: {
        Allow: "GET, HEAD, POST, OPTIONS"
      }
    });
  }
}

// src/handleRequest.ts
async function handleRequest(request) {
  if (request.method === "OPTIONS") {
    return handleOptions(request);
  }
  return await handleDownload(request);
}

// src/index.ts
var src_default = {
  async fetch(request, env, ctx) {
    return await handleRequest(request);
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
