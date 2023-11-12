import connection from '@/app/database'

export const create = async (title:string,content: string, userId: number) => {
  const statement = `
    INSERT INTO blog (title,content,user_id) VALUES (?,?,?);
  `
  const [result] = await connection.execute(statement, [title,content, userId])
  return result
}

export const queryList = async (userId:number,limit='10',offset='0') =>{
  const statement =`
  SELECT id,title,content,updateAt FROM blog WHERE user_id = ? LIMIT ? OFFSET ?;
  `
  const [result] = await connection.execute(statement,[userId,String(limit),String(offset)])
  return result
}

export const queryListTotal = async (userId:number) =>{
    const statement =`
    SELECT COUNT(id) as total FROM blog WHERE user_id = ?;
    `
    const [result] = await connection.execute(statement,[userId])
    return result
}

export const queryById = async (id:number) =>{
    const statement =`
    SELECT id,title,content FROM blog WHERE id = ?;
    `
    const [result] = await connection.execute(statement,[id])
    return result
}

export const checkResource = async (resourceId:number,userId:number) =>{
    const statement = `
    SELECT * FROM blog WHERE id = ? AND user_id = ?;
    `
    const [result] = await connection.execute(statement,[resourceId,userId])
    return result.length !== 0
}

export const blogUpdate = async (title:string,content:string,id:number) =>{
    const statement = `
    UPDATE blog SET title = ?,content = ? WHERE id = ?; `
    const [result] = await connection.execute(statement,[title,content,id])
    return result
}
export  const blogRemove = async (id:number) =>{
    const statement = `
    DELETE FROM blog WHERE id = ?; `
    const [result] = await connection.execute(statement,[id])
    return result
}