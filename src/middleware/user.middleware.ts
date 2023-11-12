import {
  NAME_IS_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
  PASSWORD_IS_NOT_CORRECT,
  UNAUTHORIZATION
} from '@/config/error'
import type { Context, Next } from 'koa'
import { findUserByName } from '@/service/user.service'
import { md5Password } from '@/utils/utils'
import jwt from "jsonwebtoken";
import {PUBLIC_KEY} from "@/config/secret";


interface User {
  name: string
  password: string
}

export const verifyUser = async (ctx: Context, next: Next) => {
  const { name, password } = ctx.request.body as User
  if (!name || !password) {
    ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
    return
  }

  const users = await findUserByName(name)

  if (users.length) {
    return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
  }

  await next()
}

export const handlePassword = async (ctx: Context, next: Next) => {
  const { password } = ctx.request.body as User

  (ctx.request.body as User).password = md5Password(password)

  await next()
}

export const verifyLogin = async (ctx:Context,next:Next) =>{
  const {name,password} = ctx.request.body as User
    if(!name || !password){
      return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
    }
    const users = await findUserByName(name)
  const user = users[0]
  if (!user) {
    return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
  }
  if(user.password !== md5Password(password)){
    return ctx.app.emit('error', PASSWORD_IS_NOT_CORRECT, ctx)
  }
  ctx.user = user
  await next()
}

export const verifyAuth = async(ctx:Context,next:Next) =>{
const authorization = ctx.headers.authorization
  if(!authorization){
    return ctx.app.emit('error', UNAUTHORIZATION, ctx)
  }
  const token = authorization.replace('Bearer ','')
  try{
    const result = jwt.verify(token,PUBLIC_KEY,{
      algorithms:['RS256']
    })
    ctx.user = result
    await next()
  }catch (err){
    ctx.app.emit('error', UNAUTHORIZATION, ctx)
  }
}