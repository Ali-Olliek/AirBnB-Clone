import React, {useState, useRef, useEffect} from 'react'
import SearchAnytime from './SearchAnytime'
import SearchAnywhere from './SearchAnywhere'
import AddGuests from './AddGuests'
import '../../../../stylesheets/TopBar/searchBar.css'
import search from '../../../../assets/svgs/search.svg'

export default function SearchBar() {
  const [displaySearchBar, setDisplaySearchBar] = useState(false)

  // This function will close the search window when clicked outside
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDisplaySearchBar(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  //stackoverflow.com/a/42234988/18590539

  return (
    <>
      <div style={displaySearchBar ? {display:"block"} : null } ref={wrapperRef} className="searchBar">
        <button onClick={(e) => setDisplaySearchBar(true)} >Anywhere</button>
        <button onClick={(e) => setDisplaySearchBar(true)}>Any week</button>
        <button onClick={(e) => setDisplaySearchBar(true)}>Add Guests</button>
        <button>
          <img src={search} alt=''/>
        </button>
        {displaySearchBar ? (
          <>
            <SearchAnywhere displayed={displaySearchBar} />
            <SearchAnytime displayed={displaySearchBar} />
            <AddGuests displayed={displaySearchBar} />
          </>
        ) : null}
      </div>
    </>
  );
}
