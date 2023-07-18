import styles from './Message.module.css'

/* eslint-disable react/prop-types */
const Message = ({ msg }) => {
  return (
    <div className={styles.message}>
      <div className={styles.message__username}>{msg.username}</div>
      <div className={styles.message__text}>{msg.message}</div>
    </div>
  )
}

export default Message
