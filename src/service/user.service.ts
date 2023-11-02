import connection from '@/app/database'

interface User {
  name: string;
  password: string;
}


export const register = async (user: User) => {
  // 1.获取用户 user
  const { name, password } = user

  // 2.拼接statement
  const statement = 'INSERT INTO `user` (name, password) VALUES (?, ?);'

  // 3.执行sql语句
  const [result] = await connection.execute(statement, [name, password])
  return result
}

export const findUserByName = async (name: string) => {
  const statement = 'SELECT * FROM `user` WHERE name = ?;'
  const [values] = await connection.execute(statement, [name])
  return values
}