import { Context } from "koa";
import { register } from '@/service/user.service'

interface User {
  name: string;
  password: string;
}

export const handleRegister = async (ctx: Context) => {
  const user = ctx.request.body as User
  const result = await register(user)
  ctx.body = {
    message: '创建用户成功~',
    data: result
  }

}