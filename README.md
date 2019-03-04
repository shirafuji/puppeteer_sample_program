# puppeteer_sample_program
___  

このプログラムはchromeの自動操作ができるNodeのapiである[puppeteer](https://github.com/GoogleChrome/puppeteer)のサンプルコード。  
今回はyahooの検索結果トップ５記事のurlを返すapiを作成した。  
`tsc`コマンドによりtsファイルをコンパイルし、  
`node ./dist.index.js`でサーバーを起動してください。

## Request example
`curl -XGET --globoff "localhost:3000/search?keywords[]=golang&keywords[]=study"`

## Response example
```
[{"rank":1,"url":"https://tour.golang.org/"},
{"rank":2,"url":"https://github.com/yosuke-furukawa/golang-study"},
{"rank":3,"url":"https://github.com/yosuke-furukawa/golang-study/tree/master/003_encoding_json"},
{"rank":4,"url":"https://github.com/golang/go/wiki/Learn"},
{"rank":5,"url":"https://coder.today/first-steps-in-learning-golang-d0f3dbb3b6d7"}]%
```
