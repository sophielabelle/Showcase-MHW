import React from "react";
import { Link } from "react-router-dom";
import "./WeaponCard.css";

export const WeaponCard = ({weapon, setSelected}) => {
  const icon = weapon.assets === null ? null : weapon.assets.icon
  const id = weapon.id

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