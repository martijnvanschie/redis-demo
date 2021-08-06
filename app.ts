import { Application } from 'https://deno.land/x/oak/mod.ts';

import router from './routes.ts'

const HOST = '127.0.0.1'
const PORT = 7700

const app = new Application()

app.use(router.routes())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)

//https://www.freecodecamp.org/news/create-a-todo-api-in-deno-written-by-a-guy-coming-from-node/