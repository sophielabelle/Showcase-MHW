import React from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import "../App/site-home-logo.png";

export const Navigation = ({allWeapons, setSearchResults, searchText, setSearchText}) => {
  const location = useLocation()
  const showHome = location.pathname !== "/" ? <button className="nav-btn">Home</button> : <button className="nav-btn hidden">Home</button>
  const showWeapons = location.pathname !== "/all-weapons" ? <button className="nav-btn">All Weapons</button> : <button className="nav-btn hidden">All Weapons</button>
  const showSearchBar = location.pathname === "/all-weapons" ? <SearchForm allWeapons={allWeapons} setSearchResults={setSearchResults} searchText={searchText} setSearchText={setSearchText}/> : null

  return (
    <nav>
      {showSearchBar}
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>Monster Hunter World Weapon Wiki</h1>
        <img src={require("../App/site-home-logo.png")} alt="site monster hunter world logo, can take you home" className="home-logo"/>
      </NavLink>
      <div className="nav-btns">
        <NavLink to="/">
          {showHome}
        </NavLink>
        <NavLink to="/all-weapons">
          {showWeapons}
        </NavLink>
      </div>
    </nav>
  )
}