import { useEffect, useRef } from 'react'

import styles from './MessageLogs.module.css'
import Message from './Message/Message'

/* eslint-disable react/prop-types */
const MessageLogs = ({ chat }) => {
  const chatWindow = useRef('')

  useEffect(() => {
    const chatWindowElement = chatWindow.current
    const initialHeight = chatWindowElement.clientHeight

    chatWindowElement.scrollTop = chatWindowElement.scrollHeight
    chatWindowElement.style.maxHeight = `${initialHeight}px`
  })

  return (
    <div ref={chatWindow} className={styles.message_logs}>
      <div className={styles.message_logs__items}>
        {chat.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    </div>
  )
}

export default MessageLogs
