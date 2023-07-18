import { useState } from 'react'
import { BiSend } from 'react-icons/bi'

import styles from './MessageField.module.css'

/* eslint-disable react/prop-types */
const MessageField = ({ sendMessage }) => {
  const [text, setText] = useState('')

  const send = () => {
    sendMessage(text)
    setText('')
  }

  return (
    <div className="relative group">
      <div
        className={
          styles.message_field__shadow +
          ' group-hover:opacity-100 transition duration-1000 group-hover:duration-200'
        }></div>

      <div className={styles.message_field__block}>
        <input
          value={text}
          onChange={e => {
            if (e.target.value !== '\n') setText(e.target.value)
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') send()
          }}
          placeholder="message"
          className={styles.message_field__block__input}
        />
        <button onClick={() => send()}>
          <BiSend className={styles.message_field__block__icon} />
        </button>
      </div>
    </div>
  )
}

export default MessageField
