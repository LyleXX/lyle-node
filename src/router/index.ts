import fs from 'fs'
import Koa from 'koa';

export const registerRouters = (app: Koa) => {
  //  读取当前文件夹下的所有文件
  const files = fs.readdirSync(__dirname)

  // 2.遍历所有的文件
  for (const file of files) {
    // 3.如果是index文件，跳过
    if (file === 'index.ts') continue
    // 使用动态导入语法（import()）加载路由模块
    import(`./${file}`).then((module) => {
      const router = module.default;
      app.use(router.routes());
      app.use(router.allowedMethods());
    });
  }
}

