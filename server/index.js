import express from 'express'
import expressWs from 'express-ws'

import { logger } from './logger.js'
import { broadcastConnection, broadcastOnline } from './broadcast.js'

const app = express()

const wsServer = expressWs(app)
const aWss = wsServer.getWss()

const PORT = process.env.PORT || 3000

app.ws('/', (ws, req) => {
  // Get username and user uuid from WebSocket URL
  const userInfo = req.query
  ws.user = userInfo

  logger.info('new connection')
  logger.info(userInfo)

  broadcastOnline(aWss)

  ws.on('message', message => {
    message = JSON.parse(message)

    if (message.type !== 'writing') {
      logger.info(message)
    }

    // Resend message to all clients
    broadcastConnection(aWss, client => {
      client.send(JSON.stringify(message))
    })
  })

  ws.on('close', () => {
    logger.warn('connection lost')
    broadcastOnline(aWss)
  })
})

app.listen(PORT, () =>
  logger.info(`server started on http://localhost:${PORT}`)
)
