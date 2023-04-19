import React from "react";
import "./RandomWeapon.css";

export const RandomWeapon = ({weapon}) => {
  console.log(weapon)
 const display = weapon.id ? <img src={weapon.assets.image} /> : <p>loading...</p>
  return (
    <div className="random-weapon">
      {display}
      <p>random goes here</p>
    </div>
  )
}