import React from "react";
import { RandomWeapon } from "./RandomWeapon/RandomWeapon";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

export const HomePage = ({weapon, setSelected}) => {
  return (
    <section className="home-page">
      <div className="home-page-boxes">
        <div className="home-instructions">
          <h2>Thanks for Stopping by!</h2>
          <p>Welcome I created this site in order to provide you a space to learn and keep track of all the weapons that are availabel within Monster Hunter World. You can reasearch armors you are interested in, search through all of them and maybe eventually save them. Have a look around and keep on playing.</p>
        </div>
        <RandomWeapon weapon={weapon} setSelected={setSelected}/>
      </div>
      <NavLink to="/all-weapons">
        <button className="nav-btn">View All Weapons</button>
      </NavLink>
    </section>
  )
}