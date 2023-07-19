import clsx from 'clsx'

import styles from './Message.module.css'
import { StorageService } from '../../../../../services/storage.service'

/* eslint-disable react/prop-types */
const Message = ({ message }) => {
  const isSelf = message => {
    const uuid = StorageService.getSessionItem('uuid')
    return uuid === message.uuid ? true : false
  }

  return (
    <div className={clsx(styles.message, isSelf(message) && 'self-end')}>
      <div
        className={clsx(
          styles.message__username,
          isSelf(message) && 'text-right'
        )}>
        {message.username}
      </div>
      <div className={styles.message__text}>{message.message}</div>
    </div>
  )
}

export default Message
