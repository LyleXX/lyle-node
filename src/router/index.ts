import fs from 'fs'
import Koa from 'koa';

export const registerRouters = (app: Koa) => {
  //  读取当前文件夹下的所有文件
  const files = fs.readdirSync(__dirname)

  // 2.遍历所有的文件
  for (const file of files) {
    if (!file.endsWith('.router.ts')) continue
    const router = require(`./${file}`)

    app.use(router.routes())
    app.use(router.allowedMethods())
  }
}

