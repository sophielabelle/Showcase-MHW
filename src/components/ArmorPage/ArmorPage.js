import React, { useState, useEffect } from "react";
import { ArmorCard } from "./ArmorCard/ArmorCard";
import "./ArmorPage.css";

export const ArmorPage = ({allArmors}) => {
  console.log(allArmors)
  const cards = allArmors.map(armor => <ArmorCard key={armor['name']} armor={armor} />)

  return (
    <section className="armor-page">
      <h2>All MHW Armors</h2>
      {cards}
    </section>
  )
}