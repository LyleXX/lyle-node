import KoaRouter from '@koa/router'
import { verifyUser, handlePassword } from '@/middleware/user.middleware'
import { handleRegister } from '@/controller/user.controller'

const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.post('/register', verifyUser, handlePassword, handleRegister)

export default  userRouter