import express from 'express'
import expressWs from 'express-ws'

const app = express()
expressWs(app)

const PORT = process.env.PORT || 3000

app.ws('/', (ws, req) => {
  console.log('new connection on')
})

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
)
