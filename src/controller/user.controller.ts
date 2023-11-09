import { Context } from "koa";
import { register } from '@/service/user.service'
import {PRIVATE_KEY}  from '@/config/secret'
import jwt from 'jsonwebtoken'

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

export const handleLogin = async (ctx: Context) => {
  const {id,name} = ctx.user

  const token = jwt.sign({id,name},PRIVATE_KEY,{
    expiresIn:60 * 60 * 24,
    algorithm:'RS256',
    allowInsecureKeySizes:true
  })
    ctx.body = {
    code:0,
      data:{
      token,id,name
      }
    }
}