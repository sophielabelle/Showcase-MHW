import React from "react";
import { WeaponType } from "./WeaponType/WeaponType";
import "./WeaponsPage.css";
import { WeaponCard } from "./WeaponType/WeaponCard/WeaponCard";

export const WeaponsPage = ({allWeapons, searchResults, setSelected}) => {
  console.log(searchResults)
  const weaponSections = allWeapons.reduce((acc, weapon) => {
    if(acc[weapon.type]){
      acc[weapon.type].push(weapon)
    } else {
      acc[weapon.type] = [weapon]
    }
    return acc;
  }, {})
  const keys = Object.keys(weaponSections)
  const types = keys.map(key => <WeaponType key={key} sectionName={key} typeOfWeapons={weaponSections[key]} setSelected={setSelected} />)
  const display = types.length ? <div className="weapon-types">{types}</div> : <h3>Loading...</h3>
  
  if(!searchResults.length){
    return (
      <section className="weapons-page">
        <h2>All MHW Weapons</h2>
        {display}
      </section>
    )
  } else {
    const searchedTypes = searchResults.map(weapon => <WeaponCard weapon={weapon}/>)
    return (
      <section className="weapons-page">
        <h2>All MHW Weapons</h2>
        {searchedTypes}
      </section>
    )
  }
}