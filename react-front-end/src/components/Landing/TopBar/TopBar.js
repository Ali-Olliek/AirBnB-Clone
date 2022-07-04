import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import UserSection from './UserSection/UserSection'
import "../../../stylesheets/TopBar/topBar.css";
import logo from '../../../assets/svgs/logo.svg'

export default function TopBar() {

  return (
    <div className='topBar'>
      <img src={logo} alt=''/>
      <SearchBar />
      <UserSection />
    </div>
  );
}
