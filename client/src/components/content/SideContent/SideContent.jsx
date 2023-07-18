import MessageField from '../../MessageField'

/* eslint-disable react/prop-types */
const SideContent = ({
  message,
  setMessage,
  online,
  usernameRef,
  sendMessage
}) => {
  return (
    <aside className="col-span-1 rounded-3xl">
      <MessageField
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
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
  )
}

export default SideContent
