import { TbWriting } from 'react-icons/tb'
import { clsx } from 'clsx'

import styles from './UserCard.module.css'

/* eslint-disable react/prop-types */
const UserCard = ({ username, uuid }) => {
  return (
    <div className={styles.user_card}>
      <div>{username}</div>
      <TbWriting className={clsx('h-6 w-6')} id={uuid} />
    </div>
  )
}

export default UserCard
