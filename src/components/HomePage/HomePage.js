import React from "react";
import { RandomWeapon } from "./RandomWeapon/RandomWeapon";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./HomePage.css";

export const HomePage = ({weapon, setSelected, errMessage}) => {
  return (
    <section className="home-page">
      <div className="home-page-boxes">
        <div className="home-instructions">
          <h2>Thanks for Stopping by!</h2>
          <p>This site was created in order to provide a space to learn and keep track of all the weapons available within Monster Hunter World. They are all viewable on the All Weapons page and can be searched if there is a perticular one you are interested in. Each weapon card can be clicked on to view more in depth details. Have a look around and keep on playing!</p>
        </div>
        <RandomWeapon weapon={weapon} setSelected={setSelected} errMessage={errMessage} />
      </div>
      <NavLink to="/all-weapons">
        <button className="nav-btn">View All Weapons</button>
      </NavLink>
    </section>
  );
}

HomePage.propTypes = {
  weapon: PropTypes.object,
  setSelected: PropTypes.func,
  errMessage: PropTypes.string
}