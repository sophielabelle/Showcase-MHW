import React from "react";
import "./ArmorCard.css";

export const ArmorCard = ({armor}) => {
  console.log(armor)
  return (
    <div className="armor-card">
      <p className="armor-name">{armor.name}</p>
      <button 
      // onClick={()=> {
      //   // viewArmor()
      // }}
      >View Armor</button>
    </div>
  )
}