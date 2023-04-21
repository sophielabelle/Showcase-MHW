import React from "react";
import "./RandomWeapon.css";

export const RandomWeapon = ({weapon}) => {
  const display = weapon.id ? <div className="random-weapon"><img src={weapon.assets.image} alt={`${weapon.name} Monster Hunter Weapon`} /> <p>{weapon.name}</p></div> : <div className="random-weapon"><p>Loading...</p></div>
  return (
    <>
      {display}
    </>
  )
}