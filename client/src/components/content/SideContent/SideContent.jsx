import { ClearButton } from './ClearButton/ClearButton'
import { UserList } from './UserList/UserList'

import styles from './SideContent.module.css'

/* eslint-disable react/prop-types */
export const SideContent = ({ online }) => {
  return (
    <aside className={styles.side__content}>
      <ClearButton />
      <UserList online={online} />
    </aside>
  )
}
