import KoaRouter from "@koa/router";
import {verifyAuth} from "@/middleware/user.middleware";
import {handlePicture} from "@/middleware/upload.middle";
import {uploadCreate} from "@/controller/upload.controller";


const fileRouter = new KoaRouter({prefix:'/upload'});

fileRouter.post('/picture',verifyAuth,handlePicture,uploadCreate)

export default fileRouter