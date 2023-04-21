import React, { useState, useEffect } from "react";
import "./SearchForm.css"

export const SearchForm = ({allWeapons, setSearchResults}) => {
  const [searchText, setSearchText] = useState('')
  const getSearchRes = () => {
    const filteredWeapons = allWeapons.filter(weapon => {
      const weaponName = weapon.name.toLowerCase();
      const searchName = searchText.toLowerCase();
      if(weaponName.includes(searchName)){
        return true
      } else {
        return false
      }
    })
    setSearchResults(filteredWeapons)
  }

  useEffect(() => {
    getSearchRes()
  }, [searchText])

  return (
    <form className="search-container">
      <input 
        className="search-bar"
        type="text"
        placeholder="search armor..."
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
      />
      <button>Search</button>
    </form>
  )
}