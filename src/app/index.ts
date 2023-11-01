import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import {registerRouters} from '@/router'

const app = new Koa();

app.use(bodyParser());
registerRouters(app)

export default app;