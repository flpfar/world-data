import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import axios from 'axios';

const Country = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);
        setCountry(response.data[0]);
        setLoading(false);
      } catch (error) {
        setNotFound(true);
      }
    }
    fetchData();
  }, [countryName]);

  return (
    <div className="Country">
      { notFound && <Redirect to="/Page404" /> }
      { loading ? 'Loading' : country.name }
    </div>
  );
};

export default Country;
