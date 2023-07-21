import { v4 as uuidv4 } from 'uuid'

import { LoginLayout } from 'src/components/layout/LoginLayout/LoginLayout'
import { StorageService } from 'src/services/storage.service'

import { useEffect, useState } from 'react'

import styles from './Layout.module.css'

/* eslint-disable react/prop-types */
export const Layout = ({ children }) => {
  const [isLogin, setLogin] = useState(false)

  useEffect(() => {
    if (StorageService.getLocalItem('user')) {
      setLogin(true)
    }
  }, [])

  const onLogin = username => {
    const user = { username, uuid: uuidv4() }
    StorageService.setLocalItem('user', user)

    setLogin(true)
  }

  return (
    <div className={styles.layout}>
      {isLogin ? (
        <div className={styles.layout__content}>{children}</div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64">
          <LoginLayout onLogin={onLogin} />
        </div>
      )}
    </div>
  )
}
