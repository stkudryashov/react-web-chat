import styles from './SideContent.module.css'

/* eslint-disable react/prop-types */
const SideContent = ({ online, usernameRef }) => {
  return (
    <aside className={styles.side__content}>
      <div className="p-2 mb-4 rounded-lg shadow-md bg-violet-900 shadow-violet-900">
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

      <div className="h-full p-2 mb-0 rounded-lg shadow-md bg-violet-900 shadow-violet-900"></div>
    </aside>
  )
}

export default SideContent
