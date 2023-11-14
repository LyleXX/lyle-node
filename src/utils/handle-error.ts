import app from '@/app'
import {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
  PASSWORD_IS_NOT_CORRECT,
  UNAUTHORIZATION, BLOG_CAN_NOT_BE_EMPTY, OPERATION_IS_NOT_ALLOWED, NAME_IS_NOT_EXISTS
} from '@/config/error'

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
    case UNAUTHORIZATION:
      code = -1004
        message = '无效的token'
        break;
      case BLOG_CAN_NOT_BE_EMPTY:
        code = -1005
        message = '博客内容或标题不能为空'
        break;
        case OPERATION_IS_NOT_ALLOWED:
            code = -1006
            message = '操作不允许'
            break;
        case NAME_IS_NOT_EXISTS:
          code = -1007
          message = '用户名不存在'
            break;
  }
  ctx.body = {
    code,
    message
  }
})