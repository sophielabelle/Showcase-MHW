import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cleanWeaponData } from "../../data/utilCleanup";
import "./SingleWeapon.css";

export const SingleWeapon = ({selected}) => {
  const cleanWeapon = cleanWeaponData(selected)
  console.log('cleanData', cleanWeapon)
  console.log('elms',cleanWeapon.elements)
  console.log('elder', cleanWeapon.elderseal)
  console.log('att', cleanWeapon.attributes)
  
  const hasKeys = Object.keys(cleanWeapon)
  if(hasKeys.length){
    return (
      <section className="single-weapon">
        <h2>{cleanWeapon.name}</h2>
        <img className="selected-img" src={cleanWeapon.assets.image}/>
        <p className="weapon-description">Type : {cleanWeapon.type} | Rarity : {cleanWeapon.rarity} | Primary Damage Type : {cleanWeapon.damageType}</p>
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
        <div>
          <p className="weapon-description">The {cleanWeapon.name} has an attack base stat of {cleanWeapon.attack.display} and the main damage type is {cleanWeapon.damageType}. 
          {/* {cleanWeapon.elements} {cleanWeapon.elderseal} {cleanWeapon.attributes} */}
          </p>
        </div>
      </section>
    )
  } else {
    return (
      <section className="single-weapon">
        <h2>Oh no an error occured! Please return to the previous page!</h2>
        <NavLink to="/all-weapons">
          <button className="nav-btn">Return to All Weapons</button>
        </NavLink>
      </section>
    )
  }
}