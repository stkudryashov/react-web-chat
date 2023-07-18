/* eslint-disable react/prop-types */
const SideContent = ({ online, usernameRef }) => {
  return (
    <aside className="col-span-1 rounded-lg">
      <div className="p-2 rounded-md bg-slate-800">
        <div className="flex flex-row justify-between items-center">
          <input
            ref={usernameRef}
            placeholder="username"
            className="w-full p-2 mr-2 text-center rounded-md"
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
