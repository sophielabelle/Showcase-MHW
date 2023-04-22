import  "./default-icon.png";

export const cleanWeaponData = (weapon) => {
  console.log(weapon)
  // Elderseal ----------------------------------------------------
  const elderseal = weapon.elderseal ? weapon.elderseal : 'n/a'
  
  // Attributes ---------------------------------------------------
  const attKeys =  Object.keys(weapon.attributes)
  const attributes = attKeys.length  ? attKeys[0] : 'n/a';
  
  // Durability --------------------------------------------------
  const dura = weapon.durability !== undefined ? weapon.durability[0] : {red: 0, orange: 0, yellow: 0, green: 0, blue: 0, white: 0, purple: 0}
  
  const color1 = Math.floor(dura.red / 300 * 100);
  const color2 = Math.floor(dura.orange / 300 * 100);
  const color3 = Math.floor(dura.yellow / 300 * 100);
  const color4 = Math.floor(dura.green / 300 * 100);
  const color5 = Math.floor(dura.blue / 300 * 100);
  const color6 = Math.floor(dura.white / 300 * 100);
  const color7 = Math.floor(dura.purple / 300 * 100);
  
  // Elements -----------------------------------------------------
  const elems = weapon.elements.length ? {type: weapon.elements[0].type, damage: weapon.elements[0].damage} : {type: 'n/a', damage: 'n/a'}

  // Slots -----------------------------------------------------  
  const slot = weapon.slots.length ? weapon.slots : ['n/a']

  // Assets --------------------------------------------------
  const icn =  weapon.assets.icon.length ? weapon.assets.icon : "./default-icon.png"
  const img = weapon.assets.image.length  ? weapon.assets.image : "./default-icon.png" 

  return {
    type: weapon.type,
    rarity: weapon.rarity,
    attack: weapon.attack.display,
    elderseal: elderseal,
    attributes: attributes,
    damageType: weapon.damageType,
    name: weapon.Name,
    durability: {
      col1: color1,
      col2: color2,
      col3: color3,
      col4: color4,
      col5: color5,
      col6: color6,
      col7: color7
    },
    elements: elems,
    slots: slot,
    assets: {
      icon: icn,
      image: img
    }
  }
}