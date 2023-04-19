import React from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

export const Navigation = () => {
  return (
    <nav>
      <SearchForm />
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>Monster Hunter World Weapon Wiki</h1>
      </NavLink>
      <div className="nav-btns">
        <NavLink to="/">
          <button className="nav-btn">Home</button>
        </NavLink>
        <NavLink to="/all-weapons">
          <button className="nav-btn">All Weapons</button>
        </NavLink>
        <NavLink to="/">
          <button className="nav-btn">Favorite Weapons</button>
        </NavLink>
      </div>
    </nav>
  )
}