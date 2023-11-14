import {createPicture, getPictureById} from '@/service/file.service'
import {Context, Next} from "koa";
import {SERVER_HOST,SERVER_PORT} from '@/config/server'
import fs from 'fs'
import {UPLOAD_PATH} from '@/config/path'

export const  uploadCreate =  async (ctx:Context, next:Next) =>{
        const { filename, mimetype, size } = ctx.request.file
        // 将头像信息保存到表中
        const {insertId} = await createPicture(filename, mimetype, size)
        // 将图片地址保存到user表中
        const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/file/picture/${insertId}`
            ctx.body = {
            code: 0,
            message: '上传头像成功',
            data: avatarUrl
        }
    }
    export const getPicture = async (ctx:Context, next:Next) =>{
        const {pictureId} = ctx.params
        const picture = await getPictureById(pictureId)
        ctx.response.set('content-type',picture.mimetype)
        ctx.body = fs.createReadStream(`${UPLOAD_PATH}/${picture.filename}`)
    }
