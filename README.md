# Node.js 笔记
[后端概览](backend-summary.md)

## 第三方库
* 文件处理
  * [fs-extra](https://github.com/jprichardson/node-fs-extra) 文件操作工具库。支持给不存在的文件夹，文件写内容。
* [Yargs](https://www.npmjs.com/package/yargs) 解析命令行的参数。
* 语义化 SQL 字符串(SQL generation)
  * schemaless(不需要建表的Schema，就能生成SQL)
    * [squel](https://github.com/hiddentao/squel) [文档](https://hiddentao.com/squel/api.html)
    * [SQL query builder](https://github.com/dresende/node-sql-query)
  * schema
    * [knex](https://github.com/tgriesser/knex)
* ORM
  * [sequelize](https://github.com/sequelize/sequelize)
  * [typeorm](https://github.com/typeorm/typeorm)
  * [bookshelf](https://github.com/bookshelf/bookshelf)
  * [objection.js](https://github.com/Vincit/objection.js/) 轻量级ORM，基于 knex。
* 发 HTTP 请求
  * [urllib](https://github.com/node-modules/urllib)
* [jwt-simple](https://github.com/hokaccha/node-jwt-simple) JSON Web Token。
* [node acl](https://github.com/OptimalBits/node_acl) 接口权限。
* [parameter](https://github.com/node-modules/parameter) 参数验证。
* 测试
  * [Mocha](https://mochajs.org/) 测试框架。
  * [power-assert](https://github.com/power-assert-js/power-assert) 断言库。
  * [SuperTest](https://github.com/visionmedia/supertest) 测试 HTTP 接口的断言工具库。
* 微信 [更多](https://github.com/node-webot)
  * [Wechat API](https://github.com/node-webot/wechat-api) 微信公共平台API。
  * [wechat-oauth](https://github.com/node-webot/wechat-oauth) [移动应用微信登录开发指南](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317851&token=&lang=zh_CN) OAuth 流程：
    * 进入微信的oauth地址（服务器端也能提供接口），带Appid 和 scope(授权作用域)，获得code。 前端做(网页，app等)。
    * 用 code,Appid,AppSecret 换 access_token。 服务器端做。
    * 用 access_token 做拿用户信息等操作。 服务器端做。 access_token可能会过期，需要去刷新。
* 工具库
  * [utility](https://github.com/node-modules/utility) 支持Md5，sha1等加密算法，数字，字符串，日期工具方法等。
  * [address](https://github.com/node-modules/address) 拿当前电脑的 ipv4，ipv6,MAC地址，DNS 服务器。
  * [compressing](https://github.com/node-modules/compressing) 压缩，解压文件。支持 tar,gzip,tgz,zip。
* 集合
  * [node_modules](https://github.com/node-modules) 发现很多有趣的库。 [导航](http://node-modules.github.io/book/README.html)

## 微服务
可以理解成商城，写的微服务的代码是上面的商品，由微服务框架来提供 路由，验证，写日志，限流等等功能。

库：
* [Kong](https://github.com/Kong/kong)
* [notadd](https://github.com/notadd/notadd) 基于 [nest](https://github.com/nestjs/nest)。

## Demo
* [爬取页面](crawler)


