import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cleanWeaponData } from "../../data/utilCleanup";
import "./SingleWeapon.css";

export const SingleWeapon = ({selected}) => {
  const cleanWeapon = cleanWeaponData(selected);
  const hasKeys = Object.keys(cleanWeapon);
  
  const display = hasKeys.length ?
    (
      <section className="single-weapon">
        <h2>{cleanWeapon.name}</h2>
        <img className="selected-img" src={cleanWeapon.assets.image}/>
        <div className="weapon-description">
          <p>Weapon Type : {cleanWeapon.type} | Primary Damage Type : {cleanWeapon.damageType} | Rarity : {cleanWeapon.rarity}</p> 
          <div className="sharpness-container">
            <p>Base Weapon Sharpness Level</p>
            <table className="durability">
              <tbody>
                <tr>
                  <td className="color-1" style={{width: `${cleanWeapon.durability.col1}px`}}></td>
                  <td className="color-2" style={{width: `${cleanWeapon.durability.col2}px`}}></td>
                  <td className="color-3" style={{width: `${cleanWeapon.durability.col3}px`}}></td>
                  <td className="color-4" style={{width: `${cleanWeapon.durability.col4}px`}}></td>
                  <td className="color-5" style={{width: `${cleanWeapon.durability.col5}px`}}></td>
                  <td className="color-6" style={{width: `${cleanWeapon.durability.col6}px`}}></td>
                  <td className="color-7" style={{width: `${cleanWeapon.durability.col7}px`}}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>The {cleanWeapon.name} has an attack base stat of {cleanWeapon.attack} and the main damage type is {cleanWeapon.damageType}. It has possible additional damage type of {cleanWeapon.elements.type} and damage strength of {cleanWeapon.elements.damage}. The elderseal value is {cleanWeapon.elderseal} and it has attributes of {cleanWeapon.attributes}.</p>
          <NavLink to="/all-weapons">
            <button className="nav-btn">Return to All Weapons</button>
          </NavLink>
        </div>
      </section>
    ) : (
      <section className="single-weapon">
        <div className="single-error">
          <h2>Oh no an error occured! Please return to view all the weapons to make a new selection!</h2>
          <NavLink to="/all-weapons">
            <button className="nav-btn">Return to All Weapons</button>
          </NavLink>
        </div>
      </section>
    );
  
  return (
    <>
      {display}
    </>
  );
}