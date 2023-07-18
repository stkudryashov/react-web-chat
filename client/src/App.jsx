import { useRef, useState } from 'react'
import useWebSocket from 'react-use-websocket'

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
    <div className="container py-4 mx-auto h-screen">
      <div className="grid grid-cols-5 rounded-md h-full bg-cyan-900">
        <aside className="col-span-1 rounded-3xl">
          <div>
            <button
              onClick={sendMessage}
              className="p-2 w-full rounded-tl-md bg-green-700 hover:bg-green-500">
              Send
            </button>
            <textarea
              value={message}
              placeholder="message"
              onChange={e => {
                if (e.target.value !== '\n') setMessage(e.target.value)
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') sendMessage(e.target.value)
              }}
              className="p-2 w-full h-12 resize-none border-2 border-cyan-500"></textarea>
          </div>
          <div className="mx-2 p-2 rounded-md bg-slate-800">
            <div className="flex flex-row justify-between items-center">
              <input
                ref={usernameRef}
                placeholder="username"
                className="w-full h-6 px-2 mr-2 text-center rounded-md"
              />
              <div className="flex flex-col text-center text-white">
                <div className="text-xs">online</div>
                <div className="text-xl">{online}</div>
              </div>
            </div>
          </div>
        </aside>
        <main className="col-span-4">
          <textarea
            readOnly
            value={chat}
            className="p-2 w-full h-full resize-none border-2 rounded-r-md border-cyan-500"></textarea>
        </main>
      </div>
    </div>
  )
}

export default App
