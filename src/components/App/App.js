import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import { Navigation } from "../Navigation/Navigation";
import { WeaponsPage } from "../WeaponsPage/WeaponsPage";
import { SingleWeapon } from "../SingleWeapon/SingleWeapon";
import { fetchData } from "../../data/apiCalls";
import "./App.css";

export const App = () => {
  const [randomWeapon, setRandomWeapon] = useState({});
  const [allWeapons, setAllWeapons] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState({});
  // const [loading, setLoading] = useState(true)

  const randomNum = () => {
    return Math.floor(Math.random() * (1000 - 1 + 1) + 1)
  }
  
  const fetchRandomWeapon = () => {
    const rndInt = randomNum();
    fetchData(`weapons/${rndInt}`)
      .then(data => {
        setRandomWeapon(data);
      })
      .catch(err => {
        console.log('error',err.message);
      })
  }

  const fetchAllWeapons = () => {
    fetchData('weapons')
      .then(data => {
        setAllWeapons(data)
      })
      .catch(err => {
        console.log('error',err.message)
      })
  }

  useEffect(() => {
    fetchRandomWeapon()
  }, [])

  useEffect(() => {
    fetchAllWeapons()
  }, [])

  return (
    <main className="App">
      <Navigation />
      <Switch>
        <Route exact path="/all-weapons/weapon/:id" render={({match}) => <SingleWeapon key={match.params.selectedWeapon} id={match.params.selectedWeapon} selected={selectedWeapon}/>} />
        <Route path="/all-weapons" render={() => <WeaponsPage allWeapons={allWeapons} setSelected={setSelectedWeapon}/> } />
        <Route path="/" render={() => <HomePage weapon={randomWeapon} /> } />
        <Redirect from="*" to="/" />
      </Switch>
    </main>
  )
}