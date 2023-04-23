import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import { Navigation } from "../Navigation/Navigation";
import { WeaponsPage } from "../WeaponsPage/WeaponsPage";
import { SingleWeapon } from "../SingleWeapon/SingleWeapon";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { fetchData } from "../../data/apiCalls";
import "./App.css";

export const App = () => {
  const [randomWeapon, setRandomWeapon] = useState({});
  const [allWeapons, setAllWeapons] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [errMessage, setErrMessage] = useState('')

  const randomNum = (array) => {
    return Math.floor(Math.random() * array.length)
  }

  const fetchAllWeapons = () => {
    fetchData('weaons')
      .then(data => {
        const ranInt = randomNum(data)
        setAllWeapons(data)
        setRandomWeapon(data[ranInt])
      })
      .catch(err => {
       setErrMessage(`We're sorry there was a ${err.message} error. Please try to reload the page`)
      })
  }

  useEffect(() => {
    fetchAllWeapons()
  }, [])

  return (
    <main className="App">
      <Navigation allWeapons={allWeapons} setSearchResults={setSearchResults} searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route exact path="/all-weapons/weapon/:id" render={({match}) => <SingleWeapon key={match.params.selectedWeapon} id={match.params.selectedWeapon} selected={selectedWeapon}/>} />
        <Route exact path="/all-weapons" render={() => <WeaponsPage allWeapons={allWeapons} searchText={searchText} searchResults={searchResults} setSelected={setSelectedWeapon} errMessage={errMessage}/> } />
        <Route exact path="/" render={() => <HomePage weapon={randomWeapon} setSelected={setSelectedWeapon} errMessage={errMessage}/> } />
        <Route render={() => <ErrorPage errMessage={errMessage} />} />
        <Redirect from="*" to="/error" />
      </Switch>
    </main>
  )
}