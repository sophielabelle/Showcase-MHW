import React from "react";
import { WeaponType } from "./WeaponType/WeaponType";
import "./WeaponsPage.css";

export const WeaponsPage = ({allWeapons, setSelected}) => {
  const weaponSections = allWeapons.reduce((acc, weapon) => {
    if(acc[weapon.type]){
      acc[weapon.type].push(weapon)
    } else {
      acc[weapon.type] = [weapon]
    }
    return acc;
  }, {})
  const keys = Object.keys(weaponSections)
  const types = keys.map(key => <WeaponType name={key} typeOfWeapons={weaponSections[key]} setSelected={setSelected} />)

  const display = types.length ? <div className="weapon-types">{types}</div> : <h3>Loading...</h3>
  return (
    <section className="weapons-page">
      <h2>All MHW Weapons</h2>
      {display}
    </section>
  )
}