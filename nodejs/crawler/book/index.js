'use strict'
// 爬取一本书
var cheerio = require('cheerio')
var request = require('request')
var fs = require('fs')
var iconv = require('iconv-lite')
const BOOK_URL = 'http://www.piaotian.net/html/6/6022/index.html'
const DOWNLOAD_PATH = 'download/'
var resolvePathname = require('resolve-pathname')
const MAX_PAGENUM = 5 // 1e5

  !fs.existsSync(DOWNLOAD_PATH) && fs.mkdirSync(DOWNLOAD_PATH)

// TODO 如何知道页面的编码？ charset
var startTime = Date.now()
var endTime
var totalPageNum
var downloadPagePromiseArr = []
var strategy = 'multi' // single, multi
var strategyTools = require('../libs/execute-strategy.js')
const PARALLEL_NUM = 20 //并行下载的数量

request({
  url: BOOK_URL,
  encoding: null // 用 iconv 进行 decode 传入的参数必须是 Buffer，返回
}, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    body = iconv.decode(body, 'GBK') // 页面是 GBK 的必须要做这个处理，否则乱码
    var $ = cheerio.load(body)
    var $pages = $('.centent a').filter(function() {
      var href = $(this).attr('href').trim()
      return href && !/^javascript|#/.test(href)
    })
    totalPageNum = $pages.length
    console.log(`一共${totalPageNum}章`)
    $pages.each(function(num) {
      var $currPage = $(this)
      downloadPagePromiseArr.push(() => {
        return download($currPage.attr('href'), `${pad(num, MAX_PAGENUM)} ${$currPage.text()}`)
      })
    })

    if(strategy === 'single') {
      new strategyTools.SingleQueue(downloadPagePromiseArr)
    } else if(strategy === 'multi'){
      new strategyTools.MultiQueue(downloadPagePromiseArr, {
        parallelNum: PARALLEL_NUM
      })
    }

  }
})




function download(url, name) {
  return new Promise((resovle, reject) => {
    fetchAysn(url, name)
      .then((res) => {
        fs.writeFile(`${DOWNLOAD_PATH}/${res.name}.txt`, res.content)
        resovle()
        console.log(`${res.name} 下载完成`)
      }, (res) => {
        reject()
      })
  })

}

function fetchAysn(url, name) {
  url = url.trim()
  return new Promise((resovle, reject) => {
    if (url.indexOf('http') !== 0) { // 是否是绝对路径
      url = resolvePathname(url, BOOK_URL) // 计算绝对路径
      url = url
      var ajaxReturned = false
        // 超时处理
        // setTimeout(function () {
        //   if(!ajaxReturned){
        //     reject({ url, name })
        //   }
        // }, 1000)
      request({
        url: url + '?v=' + Date.now(),
        encoding: null,
        // timeout: 1e3
      }, (error, response, body) => {
        ajaxReturned = true
        if (error) {
          reject({ error, url, name })
          return
        }
        if (response.statusCode == 200) {
          var content = name + '\n\n' + toTxT(iconv.decode(body, 'GBK'))
          resovle({ name, content })
        }
      })
    }
  })
}

function pad(num, maxNum) {
  var padNum = maxNum - (num + '').length
  if (padNum > 0)
    for (var i = 0; i < padNum; i++) {
      num = '0' + num
    }
  return num
}

// 将 html 转化成 文本文档
function toTxT(html) {
  html = html
    .replace(/<br ?\/?>/g, '\n')
    .replace(/&nbsp;?/g, ' ')
    .replace(/<!--.*-->/g, '') // 注释

  var $ = cheerio.load(html, { decodeEntities: false })
  var $body = $('html')
  $body.find('meta,div,style,link,script,table,h1,center,title').remove()
  var res = $body.html()
  res = res.replace(/<\/?head>/g, '')
    .replace(/^(\n|\r)+/mg, '')
    .replace(/(\n|\r)+/mg, '\n\n')
    .replace(/ {4,}/mg, '  ')
  return res
}
