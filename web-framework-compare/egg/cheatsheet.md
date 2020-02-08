 # cheatsheet
## request 和 response 信息
请求的内容都在 this.ctx 上代理一部分 Request 和 Response 上的方法和属性。
ctx ctx.request.query.id 和 ctx.query.id 是等价的，ctx.response.body= 和 ctx.body= 是等价的。

* ctx.request
  * query
  * params
* ctx.response

在 controller 中调用服务
`ctx.service.user.find` user 为文件名，find 为方法名


重定向
app.redirect('/', '/home/index', 302);
app.redirect(`http://cn.bing.com/search?q=${q}`);

## 日志
logger.debug,info,wran,error

app.logger
app.coreLogger 框架和第三方插件用这个打印日志

在 contrllor 中
ctx.logger
ctx.coreLogger 自己写的插件的日志

在 service 中
this.logger


