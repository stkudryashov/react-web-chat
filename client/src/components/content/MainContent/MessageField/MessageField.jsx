import { useState } from 'react'
import { BiSend } from 'react-icons/bi'

import styles from './MessageField.module.css'
import Rainbow from '../../../custom/Rainbow/Rainbow'

/* eslint-disable react/prop-types */
const MessageField = ({ sendMessage }) => {
  const [text, setText] = useState('')

  const send = () => {
    sendMessage(text)
    setText('')
  }

  return (
    <Rainbow>
      <input
        value={text}
        onChange={e => {
          if (e.target.value !== '\n') setText(e.target.value)
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') send()
        }}
        placeholder="message"
        className={styles.message_field__input}
      />
      <button onClick={() => send()}>
        <BiSend className={styles.message_field__icon} />
      </button>
    </Rainbow>
  )
}

export default MessageField
