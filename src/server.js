import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('server/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/', router)
server.use('/api/v1',router)

server.listen(3000, () => {
    console.log('Json-Server is running.')
})