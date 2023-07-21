import { Rainbow } from 'src/components/custom/Rainbow/Rainbow'
import { throttle } from 'src/utils/throttle'

import { useCallback, useState } from 'react'
import { BiSend } from 'react-icons/bi'

import styles from './MessageField.module.css'

/* eslint-disable react/prop-types */
export const MessageField = ({ sendMessage }) => {
  const [text, setText] = useState('')

  const send = () => {
    sendMessage(text)
    setText('')
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleInput = useCallback(
    throttle(() => sendMessage(), 2000),
    []
  )

  return (
    <Rainbow>
      <div className="flex justify-start">
        <input
          value={text}
          onChange={e => {
            if (e.target.value !== '\n') {
              setText(e.target.value)
              throttleInput() // writing
            }
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
      </div>
    </Rainbow>
  )
}
