// 人人竞拍
var request = require('request');

const MAX_PRICE = process.argv[2]
const MIN_PRICE = process.argv[3] // 价格太低，平台自己会拍
console.log(`最低价格:${MIN_PRICE}, 最高价格:${MAX_PRICE}`)

if(isNaN(PRICE)) {
  throw '请输入合法的价格'
}

var maxTime = 1000
var hasBuy = false
const SIGN = '32d2e9dab1914219331c2b46c5582152' // signid
const GOODS_ID = 16774 // goodsid

function getPrice() {
  maxTime--
  if(maxTime <= 0 || hasBuy) {
    clearInterval(runId)
    console.log('结束竞拍')
    return
  }
  var refreshUrl = 
    `http://app.paibest.com//home/m?act=jp_auction_detail&json=%7B%22session%22:%7B%22uid%22:%22(null)%22,%22sid%22:%22(null)%22%7D,%22pagination%22:%7B%22page%22:%221%22,%22timestamp%22:%220%22%7D,%22id%22:%22${GOODS_ID}%22,%22ygpid%22:%22%22%7D&sign=${SIGN}`
  var opts = {
      url: refreshUrl
  }
  request.get(opts, (error, response, content) => {
      if (error) {
          console.log(error)
          return
      }
      var data = JSON.parse(content).data
      console.log(`${data.name} 原价：${data.money},现价: ${data.price}, 倒计时：${data.countdowns}`)

      if (data.countdowns == 0 && data.price < MAX_PRICE && data.price > MIN_PRICE) {
        return
          buy()
          hasBuy = true
      }
  })
}

function buy() {
  var buyUrl = 
    `http://app.paibest.com/home/m?act=jp_pay&json=%7B%22session%22:%7B%22uid%22:%2213716%22,%22sid%22:%2269F7175C-7DA0-7E59-88B3-A896F867C767%22%7D,%22goodid%22:%22${GOODS_ID}%22,%22goodcount%22:%221%22,%22pay_type%22:%22payWmoney%22,%22buyplatform%22:%22APPLE%22,%22pay_other%22:%22alipay%22,%22coupons_id%22:%22%22,%22address_id%22:%22(null)%22%7D&sign=${SIGN}`
  request.post({
    url: buyUrl
  }, (error, response, content) => {
    if (error) {
          console.log(error)
          return
      }
      // {"code":"9998","message":"签名无效"}
      var content = JSON.parse(content)
      var data = content.data
      if(content.status.errorCode == 0) {
        console.log(`已拍`)
      } else {
        console.log(content.status.errorDesc)
      }

  })

}

var runId = setInterval(getPrice, 500)
// buy()

