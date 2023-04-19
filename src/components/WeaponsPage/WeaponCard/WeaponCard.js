import React from "react";
import { Link } from "react-router-dom";
import "./WeaponCard.css";

export const WeaponCard = ({weapon, setSelected}) => {
  console.log(weapon.id)
  const id = weapon.id
  return (
    <div className="weapon-card">
      <p className="weapon-name">{weapon.name}</p>
      <Link to={`all-weapons/weapon/${id}`}>
        <button onClick={()=> {
        setSelected(weapon)
        }}>View Weapon</button>
      </Link>
    </div>
  )
}