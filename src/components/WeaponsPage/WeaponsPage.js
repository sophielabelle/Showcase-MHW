import React from "react";
import { WeaponType } from "./WeaponType/WeaponType";
import { WeaponCard } from "./WeaponType/WeaponCard/WeaponCard";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import PropTypes from "prop-types";
import "./WeaponsPage.css";

export const WeaponsPage = ({allWeapons, searchText, searchResults, setSelected, errMessage}) => {
  const errText = errMessage.length ? 
  <div>
    <ErrorPage errMessage={errMessage}/>
  </div>
  : <h3>Loading...</h3>
  const weaponSections = allWeapons.reduce((acc, weapon) => {
    if(acc[weapon.type]){
      acc[weapon.type].push(weapon)
    } else {
      acc[weapon.type] = [weapon]
    }
    return acc;
  }, {});
  
  const keys = Object.keys(weaponSections);
  const types = keys.map(key => <WeaponType key={key} sectionName={key} typeOfWeapons={weaponSections[key]} setSelected={setSelected} />);
  const display = types.length ? <div className="weapon-types">{types}</div> : errText
  
  if(!searchText.length){
    return (
      <section className="weapons-page">
        <h2>All MHW Weapons</h2>
        {display}
      </section>
    );
  } else if(searchText.length) {
    const searchedTypes = searchResults.length  ? searchResults.map(weapon => <WeaponCard key={weapon.id} weapon={weapon} setSelected={setSelected}/>) : <h3> We're sorry there are no weapons matching your search! </h3>
    
    return (
      <section className="weapons-page">
        <h2>Search Results</h2>
        <div className="search-results">
          {searchedTypes}
        </div>
      </section>
    );
  }
}

WeaponsPage.propTypes = {
  allWeapons: PropTypes.array, 
  searchText: PropTypes.string, 
  searchResults: PropTypes.array, 
  setSelected: PropTypes.func, 
  errMessage: PropTypes.string
}