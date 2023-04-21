import React, { useState, useEffect } from "react";
import "./SearchForm.css";

export const SearchForm = ({allWeapons, setSearchResults, searchText, setSearchText}) => {

  const getSearchRes = (event) => {
    event.preventDefault()
    if(searchText.length){
      const filteredWeapons = allWeapons.filter(weapon => {
        const weaponName = weapon.name.toLowerCase();
        const searchName = searchText.toLowerCase();
        if(weaponName.includes(searchName)){
          return true;
        } else {
          return false;
        }
      })
      setSearchResults(filteredWeapons);
    }
  }

  // useEffect(() => {
  //   getSearchRes()
  // }, [searchText])

  return (
    <form className="search-container">
      <input 
        className="search-bar"
        type="text"
        name="Search Bar"
        placeholder="search armor..."
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
      />
      <button className="nav-btn" onClick={(event) => getSearchRes(event)}>Search</button>
    </form>
  )
}