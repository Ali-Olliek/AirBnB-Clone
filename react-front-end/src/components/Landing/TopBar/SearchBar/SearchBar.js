import React from 'react'
import SearchAnytime from './SearchAnytime'
import SearchAnywhere from './SearchAnywhere'
import AddGuests from './AddGuests'

export default function SearchBar() {
  return (
    <>
    <SearchAnytime/>
    <SearchAnywhere />
    <AddGuests/>
    <button>Search</button>
    </>
  )
}
