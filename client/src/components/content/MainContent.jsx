import Message from '../Message'
import MessageField from '../MessageField'

/* eslint-disable react/prop-types */
const MainWindow = ({ chat, message, setMessage, sendMessage }) => {
  return (
    <main className="col-span-3 flex flex-col justify-between">
      <div className="mb-4 h-full rounded-lg shadow-md bg-violet-900 shadow-violet-900">
        <div className="flex flex-col justify-end h-full">
          {chat.map((msg, index) => (
            <Message msg={msg} key={index} />
          ))}
        </div>
      </div>

      <MessageField
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </main>
  )
}

export default MainWindow
