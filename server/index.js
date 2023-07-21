import express from 'express'
import expressWs from 'express-ws'

import { logger } from './logger.js'

const app = express()

const wsServer = expressWs(app)
const aWss = wsServer.getWss()

const PORT = process.env.PORT || 3000

app.ws('/', (ws, req) => {
  const userInfo = req.query

  logger.info('new connection')
  logger.info(userInfo)

  ws.user = userInfo

  broadcastConnection(client => {
    const onlineUsers = []

    aWss.clients.forEach(client => {
      if (!onlineUsers.find(item => item.uuid === client.user.uuid)) {
        onlineUsers.push(client.user)
      }
    })

    const data = {
      type: 'online',
      users: onlineUsers
    }

    client.send(JSON.stringify(data))
  })

  ws.on('message', message => {
    message = JSON.parse(message)

    if (message.type !== 'writing') {
      logger.info(message)
    }

    broadcastConnection(client => {
      client.send(JSON.stringify(message))
    })
  })

  ws.on('close', () => {
    logger.warn('connection lost')

    broadcastConnection(client => {
      const onlineUsers = []

      aWss.clients.forEach(client => {
        if (!onlineUsers.find(item => item.uuid === client.user.uuid)) {
          onlineUsers.push(client.user)
        }
      })

      const data = {
        type: 'online',
        users: onlineUsers
      }

      client.send(JSON.stringify(data))
    })
  })
})

app.listen(PORT, () =>
  logger.info(`server started on http://localhost:${PORT}`)
)

const broadcastConnection = callback => {
  for (const client of aWss.clients) {
    callback(client)
  }
}
