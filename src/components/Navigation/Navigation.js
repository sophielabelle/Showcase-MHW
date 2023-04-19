import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import "./Navigation.css"

export const Navigation = () => {
  return (
    <nav>
      <SearchForm />
      <h1>Monster Hunter World Armor Wiki</h1>
      <div className="nav-btns">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">All Armor Sets</button>
        <button className="nav-btn">Your Armors</button>
      </div>
    </nav>
  )
}