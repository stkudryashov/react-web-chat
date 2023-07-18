import { BiSend } from 'react-icons/bi'

/* eslint-disable react/prop-types */
const MessageField = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative h-12 overflow-hidden bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex justify-start">
        <input
          value={message}
          onChange={e => {
            if (e.target.value !== '\n') setMessage(e.target.value)
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') sendMessage(e.target.value)
          }}
          placeholder="message"
          className="w-full h-full p-4 focus:outline-none"
        />
        <button onClick={sendMessage}>
          <BiSend className="h-6 w-6 m-2 hover:fill-pink-700" />
        </button>
      </div>
    </div>
  )
}

export default MessageField
