import React from "react";
import { WeaponCard } from "./WeaponCard/WeaponCard";
import PropTypes from "prop-types";
import "./WeaponType.css";

export const WeaponType = ({sectionName, typeOfWeapons, setSelected}) => {
  const weaponCards = typeOfWeapons.map(weapon => <WeaponCard key={weapon.id} weapon={weapon} setSelected={setSelected}/>);
  const display = weaponCards.length ? <div className="weapon-cards">{weaponCards}</div> : <h3>Loading...</h3>
  const displayName = sectionName.replaceAll('-', ' ').toUpperCase();

  return (
    <section className="weapon-type-categories">
      <h3>{displayName}</h3>
      {display}
    </section>
  )
}

WeaponType.propTypes = {
  sectionName: PropTypes.string,
  typeOfWeapons: PropTypes.array,
  setSelected: PropTypes.func
}