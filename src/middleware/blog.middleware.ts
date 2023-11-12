import {Context, Next} from "koa";
import {checkResource} from "@/service/blog.service";
import {OPERATION_IS_NOT_ALLOWED} from "@/config/error";


export const verifyPermission = async (ctx:Context, next:Next) => {
    // 1.取出登录用户的ID和修改动态的id
    const { id } = ctx.user
    // 获取资源name/id
    const keyName = Object.keys(ctx.params)[0]
    const resourceId = ctx.params[keyName]

    // 2.查询user的id是否有修改momentID的权限
    const isPermission = await checkResource(
        resourceId,
        id
    )
    if (!isPermission) return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)

    // 3.如果有权限，就执行下一步
    await next()
}