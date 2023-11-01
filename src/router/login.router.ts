import KoaRouter from '@koa/router'

const loginRouter = new KoaRouter({ prefix: '/login' })

loginRouter.post('/', async (ctx) => {
  ctx.body = 'login'
})

module.exports = loginRouter