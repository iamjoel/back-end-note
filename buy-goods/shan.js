// 闪电拍卖
var request = require('request');
var fs = require('fs'),
    path = require('path'),
    certFile = path.resolve(__dirname, 'requestssl/client.crt'),
    keyFile = path.resolve(__dirname, 'requestssl/client.key')

// openssl genrsa -des3 -out client.key 1024
// openssl rsa -in client.key -out client.key 删除密码
// openssl req -new -key client.key -out client.csr
// openssl x509 -req -days 3650 -in client.csr -signkey client.key -out client.crt
// Linux下使用openssl生成SSL证书 供nginx使用

var refreshUrl = 'https://gogobids.com/api/period/2/refresh?periods=1581274'

// const PRICE = process.argv[2] // 从第二个开始
// console.log(`最高价格:${PRICE}`)

// if(isNaN(PRICE)) {
//   throw '请输入合法的价格'
// }

var maxTime = 1000
var hasBuy = false
const SIGN = '32d2e9dab1914219331c2b46c5582152'
const GOODS_ID = 16774

function getPrice() {
  maxTime--
  if(maxTime <= 0 || hasBuy) {
    clearInterval(runId)
    console.log('结束竞拍')
    return
  }
  var refreshUrl = 'https://gogobids.com/api/period/2/refresh?periods=1581274'
  var opts = {
      url: refreshUrl,
      cert: fs.readFileSync(certFile),
      key: fs.readFileSync(keyFile),
  }
  request.get(opts, (error, response, content) => {
      if (error) {
          console.log(error)
          return
      }
      // {"code":"9998","message":"签名无效"}
      console.log(content)
  })
}

getPrice()


