import React from "react";
import "./SingleWeapon.css";

export const SingleWeapon = ({selected}) => {
  console.log(selected.durability)
  // "id": 1,
  // "name": "Buster Sword 1",
  // "type": "great-sword",
  // "rarity": 1,
  // "attack": {...},
  // "elderseal": null,
  // "attributes": {...},
  // "damageType": "sever",
  // "slots": [...],
  // "elements": [...],
  // "crafting": {...},
  // "assets": {...}
  const durability = selected.durability[0]
  const color1 = durability.red / 300 * 100
  const color2 = durability.orange / 300 * 100
  const color3 = durability.yellow / 300 * 100
  const color4 = durability.green / 300 * 100
  const color5 = durability.blue / 300 * 100
  const color6 = durability.white / 300 * 100
  const color7 = durability.purple / 300 * 100

  return (
    <section className="single-weapon">
      <h2>{selected.name}</h2>
      <img className="selected-img" src={selected.assets.image}/>
      <table className="durability">
        <tr>
          <td className="color-1" style={{width: `${color1}px`}}></td>
          <td className="color-2" style={{width: `${color2}px`}}></td>
          <td className="color-3" style={{width: `${color3}px`}}></td>
          <td className="color-4" style={{width: `${color4}px`}}></td>
          <td className="color-5" style={{width: `${color5}px`}}></td>
          <td className="color-6" style={{width: `${color6}px`}}></td>
          <td className="color-7" style={{width: `${color7}px`}}></td>
        </tr>
      </table>
    </section>
  )
}