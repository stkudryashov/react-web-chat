import express from 'express'
import expressWs from 'express-ws'

const app = express()

const wsServer = expressWs(app)
const aWss = wsServer.getWss()

const PORT = process.env.PORT || 3000

app.ws('/', (ws, req) => {
  console.log('new connection on')

  ws.on('message', msg => {
    msg = JSON.parse(msg)
    console.log(msg)

    broadcastConnection(ws, msg)
  })

  ws.on('close', () => {
    console.log('connection lost')
  })
})

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
)

const broadcastConnection = (ws, msg) => {
  for (const client of aWss.clients) {
    msg.online = aWss.clients.size
    client.send(JSON.stringify(msg))
  }
}
