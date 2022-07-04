import React, {useState} from 'react'
import search from "../../../../assets/svgs/search.svg";
import SearchAnywhere from './SearchAnywhere'
import SearchAnytime from './SearchAnytime'
import AddGuests from './AddGuests'
import "../../../../stylesheets/TopBar/advancedSearchBar.css";

export default function AdvancedSearchBar({displayed}) {

  // should get inherited the button pressed for the original search bar
  const [displayTab, setDisplayTab] = useState("") 

  const buttons = [
    {title: "Where", subtitle:"Search destinations"},
    {title: "Check in", subtitle:"Add dates"},
    {title: "Check out", subtitle:"Add dates"},
    {title: "Who", subtitle:"Add guests"},
  ]

  const handleClick = (e) => {
    setDisplayTab(e.currentTarget.id)
  }
  
  // Check which tab is to display
  const renderTab = () => {
    if (displayTab == '0') return (<SearchAnywhere/>)
    else if (displayTab == '1' || displayTab === '2') return (<SearchAnytime/>)
    else if (displayTab == '3') return <AddGuests/>
  }

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
      <div className="second-level">
        {buttons.map((button, index) => (
          <button id={index} onClick={(e) => handleClick(e)} key={button.title}>
            <h4>{button.title}</h4>
            <p>{button.subtitle}</p>
          </button>
        ))}
        <button>
          <img src={search} alt="" /> Search
        </button>
      </div>
      <div>
        {renderTab()}
      </div>
    </div>
  );
}
