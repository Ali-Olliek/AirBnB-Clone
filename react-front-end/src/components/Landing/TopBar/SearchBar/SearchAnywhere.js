import React from 'react'
import  { Italy, France, ME, USA, World, SouthAmerica } from '../../../../assets/images/regions'
import '../../../../stylesheets/TopBar/searchAnywhere.css'
export default function SearchAnywhere() {
  const regions = [
    ["I'm flexible",World],
    ["ME", ME],
    ["Italy", Italy],
    ["United States", USA],
    ["France", France],
    ["South America", SouthAmerica]
  ]

  return (
    <>
      <div className="regions">
        <h2>Search by region</h2>
        <div className="regions-container">
          {regions.map((region) => (
            <button>
              <img src={region[1]} alt="" />
              <p>{region[0]}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
