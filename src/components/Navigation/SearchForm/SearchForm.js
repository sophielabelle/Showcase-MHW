import React, { useState, useEffect } from "react";
import "./SearchForm.css"

export const SearchForm = () => {
  return (
    <form className="search-container">
      <input 
        className="search-bard"
        type="text"
        placeholder="search armor..."
        // value=""
        // onChange=""
      />
    </form>
  )
}