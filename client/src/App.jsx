import { useRef, useState } from 'react'
import useWebSocket from 'react-use-websocket'

import Layout from './components/layout/Layout'

import SideContent from './components/content/SideContent/SideContent'
import MainContent from './components/content/MainContent/MainContent'

import { SocketService } from './services/socket.service'
import { StorageService } from './services/storage.service'

import { getRandomColor } from './utils/get-random-color'

import './App.css'

function App() {
  const [chat, setChat] = useState([])
  const [online, setOnline] = useState(1)

  const usernameRef = useRef('')

  const { sendJsonMessage } = useWebSocket('ws://localhost:3000', {
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
  })

  const sendMessage = message => {
    const data = {
      type: 'message',
      message: message,
      username: usernameRef.current.value,
      uuid: StorageService.getLocalItem('uuid'),
      color: getRandomColor(127)
    }

    sendJsonMessage(data)
  }

  return (
    <Layout>
      <SideContent online={online} usernameRef={usernameRef} />
      <MainContent sendMessage={sendMessage} chat={chat} />
    </Layout>
  )
}

export default App
