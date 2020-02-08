const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router()

const port = 8000

router.get('/test', (ctx, next)=> {
  ctx.body = 'Hello Koa'
})

app.use(router.routes())

app.listen(port, ()=> {
  console.log('Server listen at:', port);
})