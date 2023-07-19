import express from 'express'
import expressWs from 'express-ws'

import { logger } from './logger.js'

const app = express()

const wsServer = expressWs(app)
const aWss = wsServer.getWss()

const PORT = process.env.PORT || 3000

app.ws('/', (ws, req) => {
  logger.info('new connection')
  broadcastSendOnline()

  ws.on('message', message => {
    message = JSON.parse(message)
    logger.info(message)

    broadcastConnection(ws, message)
  })

  ws.on('close', () => {
    logger.error('connection lost')
    broadcastSendOnline()
  })
})

app.listen(PORT, () =>
  logger.info(`server started on http://localhost:${PORT}`)
)

const broadcastConnection = (ws, message) => {
  for (const client of aWss.clients) {
    client.send(JSON.stringify(message))
  }
}

const broadcastSendOnline = () => {
  const data = {
    type: 'online',
    count: aWss.clients.size
  }

  for (const client of aWss.clients) {
    client.send(JSON.stringify(data))
  }
}
