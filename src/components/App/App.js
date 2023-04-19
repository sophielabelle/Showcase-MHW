import React, { useState, useEffect } from "react";
import { HomePage } from "../HomePage/HomePage";
import { Navigation } from "../Navigation/Navigation";
import { ArmorPage } from "../ArmorPage/ArmorPage";
import { fetchData } from "../../data/apiCalls";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

export const App = () => {
  const [randomSet, setRandomSet] = useState('');
  const [allArmor, setAllArmor] = useState([]);

  const fetchRandomArmor = () => {
    fetchData('armor/sets/10')
      .then(data => {
        // console.log(data.pieces[0].assets.imageFemale)
        setRandomSet(data.pieces[0].assets.imageFemale)
      })
      .catch(err => {
        console.log('error',err.message)
      })
  }

  const fetchAllArmor = () => {
    fetchData('armor/sets')
      .then(data => {
        setAllArmor(data)
      })
      .catch(err => {
        console.log('error',err.message)
      })
  }

  useEffect(() => {
    fetchRandomArmor()
  }, [])

  useEffect(() => {
    fetchAllArmor()
  }, [])

  return (
    <main className="App">
      <Navigation />
      <Switch>
        <Route path="/all-armors" render={() => <ArmorPage allArmors={allArmor} /> } />
        {/* <Route path="/all-armors" render={() => <} /> */}
        <Route path="/" render={() => <HomePage randomArmor={randomSet} /> } />
        <Redirect from="*" to="/" />
      </Switch>
    </main>
  )
}