const fs = require('fs')
const koa = require('koa')
const static = require("koa-static")
const mount = require("koa-mount")
const app = new koa()
app.use(
  static(__dirname + '/source/')
)
app.use(
  mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
  })
)
app.listen(3000)

