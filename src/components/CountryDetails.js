import React from 'react';
// import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  //first map through countries
  //display country name that matches country code
  console.log(props);
  let country = props.countries.find((eachcountry) => {
    return eachcountry.cca3 === props.match.params.id;
  });
  console.log(country);
  return (
    <div className="flag">
      {country.name.common}
      {country.flag}
      <ul>
        {country.borders.map(border => {
          let foundCountry = props.countries.find(country => country.cca3 === border)
          return (
            <li><Link to={`/${border}`}>{foundCountry.name.common}</Link></li>
          );
        })}
      </ul>
    </div>
  );
}

export default CountryDetails;
