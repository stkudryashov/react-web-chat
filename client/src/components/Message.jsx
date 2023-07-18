/* eslint-disable react/prop-types */
const Message = ({ msg }) => {
  return (
    <div className="flex flex-col w-fit p-2 m-2 rounded-md bg-cyan-700">
      <div>{msg.message}</div>
      <div>{msg.username}</div>
    </div>
  )
}

export default Message
