import React from "react";
import "./ArmorCard.css";

export const ArmorCard = (armor) => {
  console.log('inside card',armor.armor)
  return (
    <div className="armor-card">
      <p className="armor-name">{armor.armor.name}</p>
      {/* <p>{armor}</p> */}
    </div>
  )
}