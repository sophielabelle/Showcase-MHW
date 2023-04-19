import React from "react";
import "./RandomArmorSet.css";

export const RandomArmorSet = ({ randomArmor}) => {

  return (
    <div className="random-armor">
      <img src={randomArmor} />
      <p>random goes here</p>
    </div>
  )
}