import React from "react";
import { WeaponCard } from "./WeaponCard/WeaponCard";
import "./WeaponsPage.css";

export const WeaponsPage = ({allWeapons}) => {
  const weaponCards = allWeapons.map(weapon => <WeaponCard key={weapon.name} weapon={weapon} />)

  return (
    <section className="weapons-page">
      <h2>All MHW Weapons</h2>
      {weaponCards}
    </section>
  )
}