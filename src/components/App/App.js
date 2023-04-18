import React, { useState, useEffect } from "react";
import { HomePage } from "../HomePage/HomePage";
import { Navigation } from "../Navigation/Navigation";
import "./App.css";

export const App = () => {
  

  return (
    <main>
      <Navigation />
      <HomePage />
    </main>
  )
}