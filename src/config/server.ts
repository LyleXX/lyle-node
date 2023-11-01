const dotenv = require('dotenv')

dotenv.config()

export const { SERVER_PORT, SERVER_HOST, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env
