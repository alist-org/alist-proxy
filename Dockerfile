FROM alpine:edge as builder
LABEL stage=go-builder
WORKDIR /app/
COPY ./ ./
RUN apk add --no-cache bash curl gcc git go musl-dev; \
    go build -o /app/bin/alist-proxy -ldflags="-w -s" .

FROM alpine:edge
LABEL MAINTAINER="i@nn.ci"
WORKDIR /app/
COPY --from=builder /app/bin/alist-proxy ./
EXPOSE 5243
CMD [ "./alist-proxy" ]
