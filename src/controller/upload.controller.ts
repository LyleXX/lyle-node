import {createPicture } from '@/service/upload.service'
import {Context, Next} from "koa";
import {SERVER_HOST,SERVER_PORT} from '@/config/server'
export const  uploadCreate =  async (ctx:Context, next:Next) =>{
        console.log(ctx.request.file)
        const { filename, mimetype, size } = ctx.request.file

        const { id } = ctx.user

        // 将头像信息保存到表中
        const result = await createPicture(filename, mimetype, size, id)

        // 将图片地址保存到user表中
        const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/file/picture/${id}`


        ctx.body = {
            code: 0,
            message: '上传头像成功',
            data: avatarUrl
        }
    }
