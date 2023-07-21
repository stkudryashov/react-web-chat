import { StorageService } from '../../../../services/storage.service'

import styles from './ClearButton.module.css'

/* eslint-disable react/prop-types */
const ClearButton = () => {
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

export default ClearButton
