import React, { useState, useEffect } from "react";
import { ArmorCard } from "./ArmorCard/ArmorCard";
import "./ArmorPage.css";

export const ArmorPage = ({allArmors}) => {
  console.log(allArmors)
  // console.log(allArmors[0].name)
  const cards = allArmors.map(armor => <ArmorCard key={armor.name} armor={armor}/>)

  return (
    <section className="armor-page">
      {cards}
    </section>
  )
}