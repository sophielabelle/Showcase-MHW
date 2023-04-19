import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

export const Navigation = () => {
  return (
    <nav>
      <SearchForm />
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>Monster Hunter World Armor Wiki</h1>
      </NavLink>
      <div className="nav-btns">
        <NavLink to="/">
          <button className="nav-btn">Home</button>
        </NavLink>
        <NavLink to="/all-armors">
          <button className="nav-btn">All Armor Sets</button>
        </NavLink>
        <NavLink to="/">
          <button className="nav-btn">Your Armors</button>
        </NavLink>
      </div>
    </nav>
  )
}