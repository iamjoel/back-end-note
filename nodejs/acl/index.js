var express = require('express');
var app = express()
var httpsServer = require('http').createServer(app);

httpsServer.listen(3002, function() {
    console.info("Express server listening on port 3002");
})

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

var acl = require('acl')
acl = new acl(new acl.memoryBackend()) // 内存里放acl
acl.allow([{
        roles: ['guest'],
        allows: [
            { resources: 'blog', permissions: 'get' },
        ]
    },
    {
        roles: ['member'],
        allows: [
            { resources: 'blog', permissions: ['post', 'put'] },
        ]
    }
])

acl.addUserRoles('joel', 'guest')
acl.addUserRoles('jack', 'member')

// 自定义userid的来源（userid 默认是 req.session.userId 来的） 和 资源名的中间件。
var convertUserIdMiddleware = resource => {
  return (req, res, next) => {
    console.log(`${req.query.userid} ${req.method.toLowerCase()} ${resource}`)
    acl.isAllowed(req.query.userid, resource, req.method.toLowerCase(), (err, allowed) => {
      if (err) return next(err)
      if (!allowed) return res.status(403).send('Insufficient permissions to access resource')
      next()
    })
  }
}


// get: 127.0.0.1:3002/blog?userid=joel
// get: 127.0.0.1:3002/blog?userid=joel1
app.get('/blog', convertUserIdMiddleware('blog') ,(req, res) => {
    var userId = req.query.userid
    res.send(`${userId} view blog`)
})

// post: 127.0.0.1:3002/blog?userid=jack
// post: 127.0.0.1:3002/blog?userid=jack1
app.post('/blog', convertUserIdMiddleware('blog') ,(req, res) => {
    var userId = req.query.userid
    res.send(`${userId} create blog`)
})