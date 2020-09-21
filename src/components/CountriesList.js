import React from 'react';
import countryList from '../countries.json';
import { Link } from 'react-router-dom'

function CountriesList() {

  let listOfLinks = countryList.map(country => {
    return (
      <li><Link to={`/${country.cca3}`}>{country.name.common}</Link></li>
    )
  })
  return (
    <div>
      <ul>{listOfLinks}</ul>
    </div>
  );
}

export default CountriesList;