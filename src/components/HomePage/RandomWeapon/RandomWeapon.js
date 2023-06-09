import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"

export const RandomWeapon = ({weapon, setSelected, errMessage}) => {
  const errText = errMessage.length ? <p>{errMessage}</p> : <p>Loading...</p>

  const display = weapon.id ? 
  <div className="random-weapon">
    <img src={weapon.assets.image} alt={`${weapon.name} Monster Hunter Weapon`} /> 
    <p>{weapon.name}</p>
    <NavLink to={`all-weapons/weapon/${weapon.id}`}>
      <button className="select-btn" onClick={()=> { setSelected(weapon) }}>View Weapon</button>
    </NavLink>
  </div> : 
  <div className="random-weapon">
    {errText}
  </div>

  return (
    <>
      {display}
    </>
  );
}

RandomWeapon.propTypes = {
  weapon: PropTypes.object,
  setSelected: PropTypes.func,
  errMessage: PropTypes.string
}