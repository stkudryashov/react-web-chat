import UsernameField from './UsernameField/UsernameField'
import ClearButton from './ClearButton/ClearButton'

import styles from './SideContent.module.css'

/* eslint-disable react/prop-types */
const SideContent = ({ online, usernameRef }) => {
  return (
    <aside className={styles.side__content}>
      <UsernameField online={online} usernameRef={usernameRef} />
      <div className="h-full p-2 mb-4 rounded-lg shadow-md bg-violet-900 shadow-violet-900"></div>
      <ClearButton />
    </aside>
  )
}

export default SideContent
