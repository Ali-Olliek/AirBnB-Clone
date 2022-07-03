import React from 'react'
import SearchAnytime from './SearchAnytime'
import SearchAnywhere from './SearchAnywhere'
import AddGuests from './AddGuests'
import '../../../../stylesheets/TopBar/searchBar.css'
import search from '../../../../assets/svgs/search.svg'

export default function SearchBar() {
  return (
    <>
      <div className="searchBar">
        <SearchAnywhere />
        <SearchAnytime />
        <AddGuests />
        <button>
          <img src={search}/>
        </button>
      </div>
    </>
  );
}
