/* eslint-disable react/prop-types */
const MessageField = ({ message, setMessage, sendMessage }) => {
  return (
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
  )
}

export default MessageField
