import { clsx } from 'clsx'

import { StorageService } from 'src/services/storage.service'

import styles from './Message.module.css'

/* eslint-disable react/prop-types */
export const Message = ({ message }) => {
  const isSelf = () => {
    const uuid = StorageService.getLocalItem('user').uuid
    return uuid === message.uuid ? true : false
  }

  return (
    <div className={clsx(styles.message, isSelf() && 'self-end mr-4')}>
      <div
        className={clsx(
          styles.message__username,
          isSelf(message) && 'text-right'
        )}>
        {message.username}
      </div>
      <div
        className={styles.message__text}
        style={{ backgroundColor: message.color }}>
        {message.message}
      </div>
    </div>
  )
}
