import express from 'express'
import expressWs from 'express-ws'

import { logger } from './logger.js'

const app = express()

const wsServer = expressWs(app)
const aWss = wsServer.getWss()

const PORT = process.env.PORT || 3000

app.ws('/', (ws, req) => {
  logger.info('new connection')

  ws.on('message', message => {
    message = JSON.parse(message)
    logger.info(message)

    broadcastConnection(ws, message)
  })

  ws.on('close', () => {
    logger.error('connection lost')
  })
})

app.listen(PORT, () =>
  logger.info(`server started on http://localhost:${PORT}`)
)

const broadcastConnection = (ws, message) => {
  for (const client of aWss.clients) {
    message.online = aWss.clients.size
    client.send(JSON.stringify(message))
  }
}
