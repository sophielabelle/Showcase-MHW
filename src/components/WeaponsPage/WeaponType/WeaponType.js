import React from "react";
import { WeaponCard } from "./WeaponCard/WeaponCard";
import "./WeaponType.css";

export const WeaponType = ({name, typeOfWeapons, setSelected}) => {
  console.log('type', typeOfWeapons)
  const weaponCards = typeOfWeapons.map(weapon => <WeaponCard key={weapon.name} weapon={weapon} setSelected={setSelected}/>)
  const display = weaponCards.length ? <div className="weapon-cards">{weaponCards}</div> : <h3>Loading...</h3>

  return (
    <section className="weapons-page">
      <h3>{name}</h3>
      {display}
    </section>
  )
}