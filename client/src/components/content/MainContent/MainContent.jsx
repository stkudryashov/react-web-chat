/* eslint-disable react/prop-types */
const MainWindow = ({ chat }) => {
  return (
    <main className="col-span-4">
      <textarea
        readOnly
        value={chat}
        className="p-2 w-full h-full resize-none border-2 rounded-r-md border-cyan-500"></textarea>
    </main>
  )
}

export default MainWindow
