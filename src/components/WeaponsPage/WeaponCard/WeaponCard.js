import React from "react";
import "./WeaponCard.css";

export const WeaponCard = ({weapon}) => {
  console.log(weapon)
  return (
    <div className="weapon-card">
      <p className="weapon-name">{weapon.name}</p>
      <button>View Weapon</button>
    </div>
  )
}
// onClick={()=> {
// viewArmor()
// }}