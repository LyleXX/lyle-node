import KoaRouter from '@koa/router'
import {verifyUser, handlePassword, verifyLogin} from '@/middleware/user.middleware'
import {handleLogin, handleRegister} from '@/controller/user.controller'

const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.post('/register', verifyUser, handlePassword, handleRegister)

userRouter.post('/login',verifyLogin,handleLogin)
export default  userRouter