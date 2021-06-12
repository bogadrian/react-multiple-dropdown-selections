import { useState, useEffect } from 'react';
import './App.css';
import { SHOPS_FAKE } from './DATA_SHOPS';

function App() {
  console.log(typeof SHOPS_FAKE);
  const [loadData, setLoadData] = useState([]);

  const [
    {
      id_react,
      country_react,
      types_react,
      city_react,
      province_react,
      business_name_react
    },
    setData
  ] = useState({
    id_react: 1,
    business_name_react: 'Demo Boutique',
    country_react: 'HU',
    city_react: 'Budapest',
    province_react: 'Budapest',
    types_react: 'DEMO STORE'
  });

  useEffect(() => {
    setLoadData(SHOPS_FAKE);
  }, []);

  // name
  function handlerNAME(event) {
    setData(data => ({ ...data, business_name_react: event.target.value }));
  }

  const filter_NAME = loadData.map((n, index) => {
    return (
      <option key={index} value={n.business_name}>
        {n.business_name}
      </option>
    );
  });

  //Countries
  function gestisciNAZIONE(event) {
    setData(data => ({ ...data, country_react: event.target.value }));
  }

  const filter_COUNTRY = loadData
    ?.filter(n => {
      return n.business_name === business_name_react;
    })
    ?.map((c, index) => {
      return (
        <option key={index} value={c.country}>
          {c.country}
        </option>
      );
    });

  // Province
  function gestisciPROVINCE(event) {
    setData(data => ({ ...data, province_react: event.target.value }));
  }
  const filter_PROVINCE = loadData
    ?.filter(n => n.country === country_react)
    .map((c, index) => {
      return (
        <option key={index} value={c.province}>
          {c.province}
        </option>
      );
    });
  // Cities
  function gestisciCITY(event) {
    setData(data => ({ ...data, city_react: event.target.value }));
  }

  const filter_CITY = loadData
    ?.filter(n => n.country === country_react)
    .map((c, index) => {
      return (
        <option key={index} value={c.city}>
          {c.city}
        </option>
      );
    });

  // TYPES
  function gestisciTYPE(event) {
    setData(data => ({ ...data, types_react: event.target.value }));
  }
  const filter_TYPE = loadData
    ?.find(n => n.city === city_react)
    ?.types?.map((c, index) => {
      return (
        <option key={index} value={c}>
          {c}
        </option>
      );
    });

  // *** SUBMIT - RETURN SELECTIONS FILTERING BY ID *** //

  function handlerSubmit(e) {
    e.preventDefault();
    console.log(
      'USER SELECTION:',
      id_react,
      country_react,
      types_react,
      city_react,
      province_react,
      business_name_react
    );
  }

  // jsx
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="name">NAME: {''}</label>
          <select id="name" value={business_name_react} onChange={handlerNAME}>
            {filter_NAME}
          </select>
        </div>

        <div>
          <label htmlFor="countries">COUNTRIES: {''}</label>
          <select
            id="countries"
            value={country_react}
            onChange={gestisciNAZIONE}
          >
            {filter_COUNTRY}
          </select>
        </div>

        <div>
          <label htmlFor="city">CITY: {''}</label>
          <select id="city" value={city_react} onChange={gestisciCITY}>
            {filter_CITY}
          </select>
        </div>
        <div>
          <label htmlFor="province">PROVINCE: {''}</label>
          <select
            id="province"
            value={province_react}
            onChange={gestisciPROVINCE}
          >
            {filter_PROVINCE}
          </select>
        </div>
        <div>
          <label htmlFor="types">TYPES: {''}</label>
          <select id="types" value={types_react} onChange={gestisciTYPE}>
            {filter_TYPE}
          </select>
        </div>
        {/**/}
        <input type="submit" value="Submit" />
        <pre>{JSON.stringify(loadData, null, 2)}</pre>
      </form>
    </>
  );
}

export default App;
