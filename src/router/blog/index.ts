import KoaRouter from "@koa/router";
import {verifyAuth} from "@/middleware/user.middleware";
import {verifyPermission} from "@/middleware/blog.middleware";
import {list, createBlog, detail, update,remove} from "@/controller/blog.controller";

const blogRouter = new KoaRouter({ prefix: "/blog" });

blogRouter.post('/',verifyAuth,createBlog)
blogRouter.get('/list',verifyAuth,list)
blogRouter.get('/:blogId',detail)
blogRouter.post('/:blogId',verifyAuth,verifyPermission,update)
blogRouter.post('/delete/:blogId',verifyAuth,verifyPermission,remove)
export default blogRouter