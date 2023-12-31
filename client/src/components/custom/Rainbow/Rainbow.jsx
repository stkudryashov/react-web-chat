import { clsx } from 'clsx'

import styles from './Rainbow.module.css'

/* eslint-disable react/prop-types */
export const Rainbow = ({ children }) => {
  return (
    <div className="relative group">
      <div
        className={clsx(
          styles.rainbow__shadow,
          'group-hover:opacity-100 transition duration-1000 group-hover:duration-200'
        )}></div>
      <div className={styles.rainbow__block}>{children}</div>
    </div>
  )
}
