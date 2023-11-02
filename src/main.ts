import 'module-alias/register'
import app from '@/app';
import { SERVER_HOST, SERVER_PORT } from '@/config/server'
import './utils/handle-error'


app.listen(SERVER_PORT, () => {
  console.log(`Server running at ${SERVER_HOST}:${SERVER_PORT}`)
})