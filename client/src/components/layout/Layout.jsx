import styles from './Layout.module.css'

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__content}>{children}</div>
    </div>
  )
}

export default Layout
