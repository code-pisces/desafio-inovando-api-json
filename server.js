
const jsonServer = require('json-server')

const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ noCors: false })

const port = process.env.PORT || 3333

app.db = router.db

app.use(middlewares);
app.use(router)
app.listen(port)