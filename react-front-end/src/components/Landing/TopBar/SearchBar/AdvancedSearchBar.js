import React from 'react'
import search from "../../../../assets/svgs/search.svg";
import SearchAnywhere from './SearchAnywhere'
import SearchAnytime from './SearchAnytime'
import AddGuests from './AddGuests'
import "../../../../stylesheets/TopBar/advancedSearchBar.css";

export default function AdvancedSearchBar({displayed}) {
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
          <button>
            <h4>Where</h4>
            <p>Search destinations</p>
          </button>
          <button>
            <h4>Check in</h4>
            <p>Add dates</p>
          </button>
          <button>
            <h4>Check out</h4>
            <p>Add dates</p>
          </button>
          <button>
            <h4>Who</h4>
            <p>Add guests</p>
          </button>
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
