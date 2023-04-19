import React from "react";
import "./SingleWeapon.css";

export const SingleWeapon = ({selected}) => {
  console.log(selected.assets.image)
  return (
    <section className="single-weapon">
      <h2>{selected.name}</h2>
      <img className="selected-img" src={selected.assets.image}/>
    </section>
  )
}