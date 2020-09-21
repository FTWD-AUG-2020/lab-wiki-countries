import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      {/* Create Switch  */}
      <Switch>
        <Route path="/:id" render={(props) => <CountryDetails {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
