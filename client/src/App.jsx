import { useState } from 'react'
import useWebSocket from 'react-use-websocket'

import './App.css'

function App() {
  const [chat, setChat] = useState('')
  const [message, setMessage] = useState('')

  useWebSocket('ws://localhost:3000', {
    onOpen: () => {
      console.log('connected to server')
    }
  })

  const sendMessage = () => {
    setChat(chat + 'username: ' + message.trim() + '\n')
    setMessage('')
  }

  return (
    <div className="container py-4 mx-auto h-screen">
      <div className="grid grid-cols-5 rounded-md h-full bg-cyan-900">
        <aside className="col-span-1 rounded-3xl">
          <button
            onClick={sendMessage}
            className="p-2 w-full rounded-tl-md bg-green-700 hover:bg-green-500"
          >
            Send
          </button>
          <textarea
            value={message}
            onChange={e => {
              if (e.target.value !== '\n') setMessage(e.target.value)
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') sendMessage(e.target.value)
            }}
            className="p-2 w-full h-12 resize-none border-2 border-cyan-500"
          ></textarea>
        </aside>
        <main className="col-span-4">
          <textarea
            readOnly
            value={chat}
            className="p-2 w-full h-full resize-none border-2 rounded-r-md border-cyan-500"
          ></textarea>
        </main>
      </div>
    </div>
  )
}

export default App
