import connection from '@/app/database'

export const createPicture = async(filename:string, mimetype:string, size:number, userId:string) =>{
    const statement =`
    INSERT INTO picture (filename,mimetype,size,user_id) VALUES (?,?,?,?);
    `
    const [result] = await connection.execute(statement,[filename,mimetype,size,userId])
    return result
}

export const getPictureById = async(pictureId:string)=> {
    const statement = `SELECT * FROM picture WHERE id = ?;`
    const [result] = await connection.execute(statement, [pictureId])
    return result.pop()
}