import React from 'react';
import countries from '../countries.json';

function CountryDetails(props) {
  //first map through countries
  //display country name that matches country code
  console.log(props);
  let country = countries.find((eachcountry) => {
    return eachcountry.cca3 === props.match.params.id;
  });
  console.log(country);
  return (
    <div className="flag">
      {country.name.common}
      {country.flag}
    </div>
  );
}

export default CountryDetails;
