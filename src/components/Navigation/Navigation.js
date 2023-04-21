import React from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

export const Navigation = ({allWeapons, setSearchResults}) => {
  const location = useLocation()
  const showHome = location.pathname !== "/home" ? <button className="nav-btn">Home</button> : <button className="nav-btn hidden">Home</button>
  const showWeapons = location.pathname !== "/all-weapons" ? <button className="nav-btn">All Weapons</button> : <button className="nav-btn hidden">All Weapons</button>
  const showSearchBar = location.pathname === "/all-weapons" ? <SearchForm allWeapons={allWeapons} setSearchResults={setSearchResults}/> : null

  return (
    <nav>
      {showSearchBar}
      <NavLink to="/home" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>Monster Hunter World Weapon Wiki</h1>
      </NavLink>
      <div className="nav-btns">
        <NavLink to="/home">
          {showHome}
        </NavLink>
        <NavLink to="/all-weapons">
          {showWeapons}
        </NavLink>
        <NavLink to="/favorite-weapons">
          <button className="nav-btn">Favorite Weapons</button>
        </NavLink>
      </div>
    </nav>
  )
}