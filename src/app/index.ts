import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { registerRouters } from '@/router'
import cors from 'koa2-cors'

const app = new Koa();
app.use(cors());

app.use(bodyParser());
registerRouters(app)

export default app;