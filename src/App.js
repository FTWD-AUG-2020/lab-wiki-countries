import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'

function App() {
  let [countries, setCountries] = useState([])
  useEffect(() => {
    async function getData() {
      console.log("banana")
      let res = await axios.get("https://countries.tech-savvy.tech/countries")
      console.log(res)
      setCountries(res.data)
    }
    console.log("zuchinni")
    getData()

  }, [])

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      {/* Create Switch  */}

      <Switch>
        <Route path="/:id" render={(props) => <CountryDetails countries={countries} {...props} />} />
      </Switch>
    </div>
  );
}


export default App;
