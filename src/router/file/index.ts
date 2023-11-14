import KoaRouter from "@koa/router";
import {verifyAuth} from "@/middleware/user.middleware";
import {handlePicture} from "@/middleware/file.middleware";
import {getPicture, uploadCreate} from "@/controller/file.controller";


const fileRouter = new KoaRouter({prefix:'/file'});

fileRouter.post('/upload',handlePicture,uploadCreate)

fileRouter.get('/picture/:pictureId',getPicture)

export default fileRouter