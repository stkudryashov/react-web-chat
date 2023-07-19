import Rainbow from '../../../custom/Rainbow/Rainbow'

import styles from './UsernameField.module.css'

/* eslint-disable react/prop-types */
const UsernameField = ({ online, usernameRef }) => {
  return (
    <div className={styles.username_field}>
      <div className={styles.username_field__block}>
        <div className="w-full mr-2">
          <Rainbow>
            <input
              ref={usernameRef}
              placeholder="username"
              className="w-full h-10 p-2 text-center rounded-md focus:outline-none"
            />
          </Rainbow>
        </div>

        <div className="flex flex-col text-center text-white">
          <div className="text-xs">online</div>
          <div className="text-xl">{online}</div>
        </div>
      </div>
    </div>
  )
}

export default UsernameField
