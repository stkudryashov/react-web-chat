import styles from './Rainbow.module.css'

/* eslint-disable react/prop-types */
const Rainbow = ({ children }) => {
  return (
    <div className="relative group">
      <div
        className={
          styles.rainbow__shadow +
          ' group-hover:opacity-100 transition duration-1000 group-hover:duration-200'
        }></div>
      <div className={styles.rainbow__block}>{children}</div>
    </div>
  )
}

export default Rainbow
