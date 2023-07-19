import clsx from 'clsx'

import styles from './Message.module.css'

/* eslint-disable react/prop-types */
const Message = ({ message }) => {
  return (
    <div className={clsx(styles.message)}>
      <div className={styles.message__username}>{message.username}</div>
      <div className={styles.message__text}>{message.message}</div>
    </div>
  )
}

export default Message
