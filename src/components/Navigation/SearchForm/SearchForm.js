import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SearchForm.css";

export const SearchForm = ({allWeapons, setSearchResults, searchText, setSearchText}) => {

  const getSearchRes = () => {
    if(searchText.length){
      const filteredWeapons = allWeapons.filter(weapon => {
        const weaponName = weapon.name.toLowerCase();
        const searchName = searchText.toLowerCase();
        if(weaponName.includes(searchName)){
          return true;
        } else {
          return false;
        }
      });
      setSearchResults(filteredWeapons);
    }
  }

  useEffect(() => {
    getSearchRes();
  }, [searchText]);

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
    </form>
  );
}

SearchForm.propTypes = {
  allWeapons: PropTypes.array, 
  setSearchResults: PropTypes.func,
  searchText: PropTypes.string, 
  setSearchText: PropTypes.func
}