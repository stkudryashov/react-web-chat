import { UserCard } from './UserCard/UserCard'

import styles from './UserList.module.css'

/* eslint-disable react/prop-types */
export const UserList = ({ online }) => {
  return (
    <div className={styles.user_list}>
      {online.map(userInfo => (
        <div className="mb-2" key={userInfo.uuid}>
          <UserCard username={userInfo.username} uuid={userInfo.uuid} />
        </div>
      ))}
    </div>
  )
}
