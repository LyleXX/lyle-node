import {create, queryList, queryListTotal, queryById, blogUpdate, blogRemove} from "@/service/blog.service";
import {Context, Next} from "koa";
import {BLOG_CAN_NOT_BE_EMPTY} from "@/config/error";
interface Content{
    content:string
    title:string
}

export const createBlog = async(ctx:Context,next:Next) =>{
    const {content,title} = ctx.request.body  as Content
    if(!content || !title){
        return ctx.app.emit('error', BLOG_CAN_NOT_BE_EMPTY, ctx)
    }
    const {id} = ctx.user
    const result = await create(title,content,id)

    ctx.body = {
        code:0,
        message:'发表成功',
        data:result
    }
}


export const list = async(ctx:Context,next:Next) =>{
    const {offset,limit} = ctx.query
    const {id} = ctx.user
    const result = await queryList(id, limit as string, offset as string)
    const total = await queryListTotal(id)
    ctx.body = {
        code:0,
        message:'查询成功',
        data:result,
        total:total[0].total
    }
}

export const detail = async(ctx:Context,next:Next) =>{
const {blogId} = ctx.params
    const result = await queryById(blogId)
    ctx.body = {
        code:0,
        message:'查询成功',
        data:result[0]
    }
}
export const update = async(ctx:Context,next:Next) =>{
    const {blogId} = ctx.params
    const {content,title} = ctx.request.body  as Content
    const result = await blogUpdate(title,content,blogId)
    ctx.body = {
        code:0,
        message:'修改成功',
        data:result

    }
}
export const remove = async (ctx:Context, next:Next) =>{
    // 获取数据
    const { blogId } = ctx.params

    // 删除数据
    const result = await blogRemove(blogId)

    ctx.body = {
        code: 0,
        message: '删除动态成功',
        data: result
    }
}