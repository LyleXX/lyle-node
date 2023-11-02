import mysql from 'mysql2'
import { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } from '@/config/server'
// 1.创建连接池
const connectionPool: any = mysql.createPool({
  host: MYSQL_HOST,
  port: Number(MYSQL_PORT),
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  connectionLimit: 5
})

// 2.获取连接是否成功
connectionPool.getConnection((err: Error | null, connection: mysql.PoolConnection) => {
  // 1.连接失败
  if (err) {
    console.log('连接失败', err)
    return
  }
  // 2.连接成功
  connection.connect(err => {
    if (err) {
      console.log('数据库连接失败', err)
      return
    }
    console.log('数据库连接成功')
  })
})

// 3.获取连接池中连接对象（异步的）
export default connectionPool.promise()

