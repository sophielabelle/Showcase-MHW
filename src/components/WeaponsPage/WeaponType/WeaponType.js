import React from "react";
import { WeaponCard } from "./WeaponCard/WeaponCard";
import "./WeaponType.css";

export const WeaponType = ({name, typeOfWeapons, setSelected}) => {
  const weaponCards = typeOfWeapons.map(weapon => <WeaponCard key={weapon.name} weapon={weapon} setSelected={setSelected}/>)
  const display = weaponCards.length ? <div className="weapon-cards">{weaponCards}</div> : <h3>Loading...</h3>

  const displayType = name.replaceAll('-', ' ').toUpperCase()
  console.log(displayType)

  return (
    <section className="weapon-type-categories">
      <h3>{displayType}</h3>
      {display}
    </section>
  )
}