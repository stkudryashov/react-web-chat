import { TbWriting } from 'react-icons/tb'

import styles from './UserCard.module.css'

/* eslint-disable react/prop-types */
const UserCard = ({ username }) => {
  return (
    <div className={styles.user_card}>
      <div>{username}</div>
      <TbWriting className="h-6 w-6" />
    </div>
  )
}

export default UserCard
