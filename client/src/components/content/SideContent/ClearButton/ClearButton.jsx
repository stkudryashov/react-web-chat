import { StorageService } from 'src/services/storage.service'

import styles from './ClearButton.module.css'

/* eslint-disable react/prop-types */
export const ClearButton = () => {
  const clearLocalChat = () => {
    StorageService.clearLocalStorage()
    window.location.reload()
  }

  return (
    <div onClick={clearLocalChat} className={styles.clear_button}>
      logout
    </div>
  )
}
