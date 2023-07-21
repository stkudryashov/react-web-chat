import { SideContent } from './SideContent/SideContent'
import { MainContent } from './MainContent/MainContent'

import { SocketService } from 'src/services/socket.service'
import { StorageService } from 'src/services/storage.service'

import { getRandomColor } from 'src/utils/get-random-color'

import { useState } from 'react'
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket'

export const Content = () => {
  const [chat, setChat] = useState([])
  const [online, setOnline] = useState([])

  const [user] = useState(StorageService.getLocalItem('user'))

  const { sendJsonMessage } = useWebSocket(
    `ws://localhost:3000/?username=${user.username}&uuid=${user.uuid}`,
    {
      onOpen: () => {
        SocketService.onOpen({ setChat })
      },
      onMessage: event => {
        SocketService.onMessage(event, { chat, setChat, setOnline })
      },
      onClose: () => {
        SocketService.onClose()
      },
      onError: () => {
        SocketService.onError()
      }
    }
  )

  const sendMessage = message => {
    if (message) {
      const data = {
        type: 'message',
        message: message,
        username: user.username,
        uuid: user.uuid,
        color: getRandomColor(127)
      }

      sendJsonMessage(data)
    } else {
      const data = {
        type: 'writing',
        username: user.username,
        uuid: user.uuid
      }

      sendJsonMessage(data)
    }
  }

  return (
    <>
      <SideContent online={online} />
      <MainContent sendMessage={sendMessage} chat={chat} />
    </>
  )
}
