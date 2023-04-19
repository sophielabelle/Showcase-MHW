import React from "react";
import { WeaponCard } from "./WeaponCard/WeaponCard";
import "./WeaponsPage.css";

export const WeaponsPage = ({allWeapons, setSelected}) => {
  const weaponCards = allWeapons.map(weapon => <WeaponCard key={weapon.name} weapon={weapon} setSelected={setSelected}/>)
  const display = weaponCards.length ? 
    <div className="weapon-cards">
      {weaponCards}
    </div> 
    : <h3>Loading...</h3>
  return (
    <section className="weapons-page">
      <h2>All MHW Weapons</h2>
      {display}
    </section>
  )
}