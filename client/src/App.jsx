import { useRef, useState } from 'react'
import useWebSocket from 'react-use-websocket'

import Layout from './components/layout/Layout'

import SideContent from './components/content/SideContent/SideContent'
import MainContent from './components/content/MainContent/MainContent'

import './App.css'

function App() {
  const [chat, setChat] = useState('')
  const [message, setMessage] = useState('')

  const [online, setOnline] = useState(1)
  const usernameRef = useRef('')

  const { sendJsonMessage } = useWebSocket('ws://localhost:3000', {
    onOpen: () => {
      console.log('connected to server')
    },
    onClose: () => {
      console.log('connection lost')
    },
    onError: () => {
      console.log('server not found')
    },
    onMessage: event => {
      const data = JSON.parse(event.data)
      console.log(data)

      setOnline(data.online)
      setChat(chat + `${data.username}: ${data.message.trim() + '\n'}`)
    }
  })

  const sendMessage = () => {
    const data = {
      message,
      username: usernameRef.current.value
    }

    sendJsonMessage(data)
    setMessage('')
  }

  return (
    <Layout>
      <SideContent
        message={message}
        setMessage={setMessage}
        online={online}
        usernameRef={usernameRef}
        sendMessage={sendMessage}
      />
      <MainContent chat={chat} />
    </Layout>
  )
}

export default App
