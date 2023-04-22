import React from "react";
import { NavLink } from "react-router-dom";
import "./RandomWeapon.css";

export const RandomWeapon = ({weapon, setSelected}) => {
  const display = weapon.id ? 
  <div className="random-weapon">
    <img src={weapon.assets.image} alt={`${weapon.name} Monster Hunter Weapon`} /> 
    <p>{weapon.name}</p>
    <NavLink to={`all-weapons/weapon/${weapon.id}`}>
        <button className="select-btn" onClick={()=> {
        setSelected(weapon)
        }}>View Weapon</button>
    </NavLink>
  </div> : 
  <div className="random-weapon">
    <p>Loading...</p>
  </div>

  return (
    <>
      {display}
    </>
  )
}