import { useRef } from 'react'

import { Rainbow } from 'src/components/custom/Rainbow/Rainbow'

import styles from './LoginLayout.module.css'

/* eslint-disable react/prop-types */
export const LoginLayout = ({ onLogin }) => {
  const usernameRef = useRef()

  return (
    <div className={styles.login_layout}>
      <div className={styles.login_layout__block}>
        <div className="mb-2 w-full">
          <Rainbow>
            <input
              ref={usernameRef}
              placeholder="username"
              onKeyDown={e => {
                if (e.key === 'Enter') onLogin(usernameRef.current.value)
              }}
              className={styles.login_layout__input}
            />
          </Rainbow>
        </div>

        <button
          onClick={() => onLogin(usernameRef.current.value)}
          className={styles.login_layout__button}>
          connect
        </button>
      </div>
    </div>
  )
}
