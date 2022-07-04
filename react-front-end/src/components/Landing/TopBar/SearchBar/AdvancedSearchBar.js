import React from 'react'
import search from "../../../../assets/svgs/search.svg";
import SearchAnywhere from './SearchAnywhere'
import SearchAnytime from './SearchAnytime'
import AddGuests from './AddGuests'
import "../../../../stylesheets/TopBar/advancedSearchBar.css";

export default function AdvancedSearchBar({displayed}) {
  
  const buttons = [
    {title: "Where", subtitle:"Search destinations"},
    {title: "Check in", subtitle:"Add dates"},
    {title: "Check out", subtitle:"Add dates"},
    {title: "Who", subtitle:"Add guests"},

  ]

  return (
    <div
      className="advancedSearchBar"
      style={displayed ? { display: "block" } : null}
    >
      <div>
        <h3>Stays</h3>
        <h3>Experiences</h3>
        <h3>Online Experiences</h3>
      </div>
      <div className='second-level'>
        {buttons.map((button)=>(
        <button>
          <h4>{button.title}</h4>
          <p>{button.subtitle}</p>
        </button>
        ))}
        <button>
          <img src={search} alt="" /> Search
        </button>
      </div>
      <div>
        <SearchAnywhere />
        {/* <SearchAnytime />
        <AddGuests /> */}
      </div>
    </div>
  );
}
