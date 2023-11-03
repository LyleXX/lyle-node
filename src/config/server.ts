import dotenv from 'dotenv'
dotenv.config({path: `.env.${process.env.NODE_ENV?.trim()}` })

export const { SERVER_PORT, SERVER_HOST, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env
