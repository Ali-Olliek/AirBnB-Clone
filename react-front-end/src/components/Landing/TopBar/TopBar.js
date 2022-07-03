import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import UserSection from './UserSection/UserSection'
import "../../../stylesheets/TopBar/topBar.css";
import logo from '../../../assets/svgs/airbnb.svg'

export default function TopBar() {
  return (
    <div className='topBar'>
      <button>
        <img src={logo} alt=''/>
      </button>
      <SearchBar />
      <UserSection />
    </div>
  );
}
