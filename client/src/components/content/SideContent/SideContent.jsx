import ClearButton from './ClearButton/ClearButton'

import styles from './SideContent.module.css'
import UserList from './UserList/UserList'

/* eslint-disable react/prop-types */
const SideContent = ({ online }) => {
  return (
    <aside className={styles.side__content}>
      <ClearButton />
      <UserList online={online} />
    </aside>
  )
}

export default SideContent
