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

  const viewWeapon = (event) => {
    console.log(event)
  }

  const fetchRandomWeapon = () => {
    // make function that randomizes numbers 1- x and inputs as the id num
    fetchData(`weapons/1`)
      .then(data => {
        setRandomWeapon(data)
      })
      .catch(err => {
        console.log('error',err.message)
      })
  }

  const fetchAllWeapons = () => {
    fetchData('weapons')
      .then(data => {
        console.log(data)
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
        <Route path="/all-weapons" render={() => <WeaponsPage allWeapons={allWeapons} viewWeapon={viewWeapon}/> } />
        <Route exact path="/all-weapons/:weapon" render={({match}) => <SingleWeapon chosenWeapon={match.params.weapon} />} />
        <Route path="/" render={() => <HomePage weapon={randomWeapon} /> } />
        <Redirect from="*" to="/" />
      </Switch>
    </main>
  )
}