import { StorageService } from '../../../../services/storage.service'

import styles from './ClearButton.module.css'

/* eslint-disable react/prop-types */
const ClearButton = () => {
  const clearLocalChat = () => {
    StorageService.clearLocalStorage()
  }

  return (
    <div onClick={clearLocalChat} className={styles.clear_button}>
      clear
    </div>
  )
}

export default ClearButton
