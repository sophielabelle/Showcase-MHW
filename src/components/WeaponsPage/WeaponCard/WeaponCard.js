import React from "react";
import { Link } from "react-router-dom";
import "./WeaponCard.css";

export const WeaponCard = ({weapon, setSelected}) => {
  let icon;
  if(weapon.assets === null) {
    icon = null
  } else {
    icon = weapon.assets.icon
  }
  const id = weapon.id
  console.log(weapon)
  return (
    <div className="weapon-card">
      <img className="icon" src={icon} alt={weapon.name}/>
      <p className="weapon-name">{weapon.name}</p>
      <Link to={`all-weapons/weapon/${id}`}>
        <button className="select-btn" onClick={()=> {
        setSelected(weapon)
        }}>View Weapon</button>
      </Link>
    </div>
  )
}