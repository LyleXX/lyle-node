import app from '@/app'
import {NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS, PASSWORD_IS_NOT_CORRECT} from '@/config/error'

app.on('error', (err, ctx) => {
  let code = 0
  let message = ''

  switch (err) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或密码不能为空'
      break;
    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      message = '用户名已存在'
      break;
    case PASSWORD_IS_NOT_CORRECT:
      code = -1003
      message = '密码错误'
      break;
  }
  ctx.body = {
    code,
    message
  }
})