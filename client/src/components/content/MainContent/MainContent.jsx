import MessageField from './MessageField/MessageField'
import MessageLogs from './MessageLogs/MessageLogs'

import styles from './MainContent.module.css'

/* eslint-disable react/prop-types */
const MainContent = ({ chat, sendMessage }) => {
  return (
    <main className={styles.main__content}>
      <MessageLogs chat={chat} />

      <MessageField sendMessage={sendMessage} />
    </main>
  )
}

export default MainContent
