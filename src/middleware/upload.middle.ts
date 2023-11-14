import multer from '@koa/multer'
import {UPLOAD_PATH} from '@/config/path'

const uploadPicture = multer({
    dest:UPLOAD_PATH
})

export const handlePicture = uploadPicture.single('picture')

