import React from 'react'
import '../../../../stylesheets/TopBar/userSection.css'
import globe from '../../../../assets/images/globe-icon.png'
import user from '../../../../assets/images/user.png'
import menu from '../../../../assets/svgs/menu.svg'

export default function UserSection() {
  return (
    <>
      <div className="userSection">
        <button>Become a Host</button>
        <button><img src={globe} alt='' />
        </button>
        <div className='userMenu'>
          <img src={menu} alt=''/>
          <img src={user} alt=''/>
        </div>
      </div>
    </>
  );
}
