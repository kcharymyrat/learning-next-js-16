```bash
npm config set proxy http://127.0.0.1:12334
npm config set https-proxy http://127.0.0.1:12334

npm config delete proxy
npm config delete https-proxy

npm config list

npm config get proxy
npm config get https-proxy
```

Sometimes Go delegates to `git` to fetch modules. You can set Git’s proxy like this:

```bash
export http_proxy=http://127.0.0.1:12334
export https_proxy=http://127.0.0.1:12334

git config --global http.proxy http://127.0.0.1:12334
git config --global https.proxy http://127.0.0.1:12334
```

Or unset it later with:

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```
