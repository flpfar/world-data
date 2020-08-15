import React from 'react';

const CountriesItem = ({ country }) => {
  const { name, population } = country;
  return (
    <div className="CountryItem">
      {name}
      {population}
    </div>
  );
};

export default CountriesItem;
