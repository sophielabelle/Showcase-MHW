import React, { useState, useEffect } from "react";
import { HomePage } from "../HomePage/HomePage";
import { Navigation } from "../Navigation/Navigation";
import "./App.css";
import { fetchData } from "../../data/apiCalls";

export const App = () => {
  const [randomSet, setRandomSet] = useState('')

  const fetchRandomArmor = () => {
    fetchData('armor/sets/10')
      .then(data => {
        console.log(data.pieces[0].assets.imageFemale)
        setRandomSet(data.pieces[0].assets.imageFemale)
      })
      .catch(err => {
        console.log('error',err.message)
      })
  }

  useEffect(() => {
    if(!randomSet) {
      fetchRandomArmor()
    }
  }, [randomSet])

  return (
    <main className="App">
      <Navigation />
      <HomePage randomArmor={randomSet} />
    </main>
  )
}