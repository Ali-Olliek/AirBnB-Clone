import React, {useState, useRef, useEffect} from 'react'
import AdvancedSearchBar from './AdvancedSearchBar'
import '../../../../stylesheets/TopBar/searchBar.css'
import search from '../../../../assets/svgs/search.svg'


// Search Bar:
// OnClick, Disappears
// OnClick, AdvancedSearchBar Element Appears
// Upon Clicking Outside of (useRef), state changes to false.

export default function SearchBar() {
  const [displaySearchBar, setDisplaySearchBar] = useState(false)

  // This function will close the search window when clicked outside
  function useOutsideAlerter(ref) {
    useEffect(() => {
      // checking if click happened outside of ref
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDisplaySearchBar(false)
        }
      }
      // Adding EventListener
      document.addEventListener("mousedown", handleClickOutside);
      // Removing Event Listener
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  //stackoverflow.com/a/42234988/18590539

  return (
    <>
      <div
        style={displaySearchBar ? { display: "none" } : null}
        ref={wrapperRef}
        className="searchBar"
      >
        <button onClick={(e) => setDisplaySearchBar(true)}>Anywhere</button>
        <button onClick={(e) => setDisplaySearchBar(true)}>Any week</button>
        <button onClick={(e) => setDisplaySearchBar(true)}>Add Guests</button>
        <button>
          <img src={search} alt="" />
        </button>
      </div>
      <div ref={wrapperRef}>
        {displaySearchBar ? 
        <>
          <AdvancedSearchBar displayed={displaySearchBar} />
        </> 
        : null }
      </div>
    </>
  );
}
