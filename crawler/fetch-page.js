'use strict'
// 搜索百度团购网站首页中带'火锅字样'的团购项目
var cheerio = require('cheerio')
var request = require('request')
var fs = require('fs')
var url = "http://tuan.baidu.com/"
const DOWNLOAD_PATH = 'download/'
!fs.existsSync(DOWNLOAD_PATH) && fs.mkdirSync(DOWNLOAD_PATH)

request(url, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body)
    $('.j-card').each(function() {
      var $this = $(this)
      var $title = $this.find('h4.title')
      if ($title.text().indexOf('火锅') !== -1) {
        console.log(`${$title.text()}:${$this.find('a').attr('href')}`)
        let tuanCoverSrc = $this.find('img').attr('data-original')
        // 下载团购图片
        request(tuanCoverSrc).pipe(fs.createWriteStream(`${DOWNLOAD_PATH}/${$title.text()}.png`))
      }
    })
  }
})
