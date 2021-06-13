import { useState, useEffect } from 'react';
import './App.css';
import { SHOPS_FAKE } from './DATA_SHOPS';

function App() {
  const [loadData, setLoadData] = useState([]);
  const [displayData, setDisplayData] = useState(loadData);
  useEffect(() => {
    setLoadData(SHOPS_FAKE);
    setDisplayData(SHOPS_FAKE);
  }, []);

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
    id_react: 0,
    business_name_react: '',
    country_react: '',
    city_react: '',
    province_react: '',
    types_react: ''
  });

  function handlerNAME(event) {
    const d = loadData.filter(el => el.business_name === event.target.value);
    setData(data => ({
      ...data,
      country_react: d[0]?.country,
      province_react: d[0]?.province,
      city_react: d[0]?.city,
      types_react: d[0]?.types[0],
      business_name_react: event.target.value
    }));
  }

  useEffect(() => {
    setData(data => ({
      id_react: loadData[0]?.id,
      business_name_react: loadData[0]?.business_name,
      country_react: loadData[0]?.country,
      city_react: loadData[0]?.city,
      province_react: loadData[0]?.province,
      types_react: loadData[0]?.types[0]
    }));
  }, [loadData]);

  const filter_NAME = loadData.map((n, index) => {
    return (
      <option key={index} value={n.business_name}>
        {n.business_name}
      </option>
    );
  });

  //Countries
  function gestisciNAZIONE(event) {
    setData(data => ({
      ...data,
      country_react: event.target.value
    }));
  }

  const filterCountry = loadData?.filter(n => {
    return n.business_name === business_name_react;
  });

  const filterProvince = loadData?.filter(n => {
    return n.country === country_react;
  });

  const filterCity = filterProvince?.filter(n => {
    return n.province === province_react;
  });

  const filterType = loadData?.filter(n => {
    return n.province === province_react;
  });

  const fC = {
    id: 1,
    country: [],
    city: [],
    province: [],
    types: []
  };

  filterCountry.forEach(el => {
    fC['country'].push(el.country);
    fC['country'] = [...new Set(fC['country'])];
  });

  const fP = {
    id: 1,
    country: [],
    city: [],
    province: [],
    types: []
  };

  filterProvince.forEach(el => {
    fP['province'].push(el.province);
    fP['province'] = [...new Set(fP['province'])];
  });

  const fCity = {
    id: 1,
    country: [],
    city: [],
    province: [],
    types: []
  };

  const r = filterCity?.length > 0 ? filterCity : [filterProvince[0]];

  r?.forEach(el => {
    fCity['city']?.push(el?.city);
    fCity['city'] = [...new Set(fCity['city'])];
  });
  const fT = {
    id: 1,
    country: [],
    city: [],
    province: [],
    types: []
  };

  filterType.forEach(el => {
    fT['types'] = [...el.types];
    fT['types'] = [...new Set(fT['types'])];
  });

  const filter_COUNTRY = fC?.country.map((c, index) => {
    return (
      <option key={index} value={c}>
        {c}
      </option>
    );
  });

  // Province

  function gestisciPROVINCE(event) {
    setData(data => ({ ...data, province_react: event.target.value }));
  }

  const filter_PROVINCE = fP.province.map((c, index) => {
    return (
      <option key={index} value={c}>
        {c}
      </option>
    );
  });

  // Cities
  function gestisciCITY(event) {
    setData(data => ({ ...data, city_react: event.target.value }));
  }

  const filter_CITY = fCity.city.map((c, index) => {
    return (
      <option key={index} value={c}>
        {c}
      </option>
    );
  });

  // TYPES
  function gestisciTYPE(event) {
    setData(data => ({ ...data, types_react: event.target.value }));
  }
  const filter_TYPE = fT.types?.map((c, index) => {
    return (
      <option key={index} value={c}>
        {c}
      </option>
    );
  });

  // *** SUBMIT - RETURN SELECTIONS FILTERING BY ID *** //

  function handlerSubmit(e) {
    e.preventDefault();

    const fData = loadData.filter(
      el =>
        el.business_name === business_name_react &&
        el.country === country_react &&
        el.province === r[0]?.province &&
        el.city === r[0]?.city &&
        el.types[0] === r[0]?.types[0]
    );

    setDisplayData(fData);
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
          <label htmlFor="city">CITY: {''}</label>
          <select id="city" value={city_react} onChange={gestisciCITY}>
            {filter_CITY}
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
        <pre>{JSON.stringify(displayData, null, 2)}</pre>
      </form>
    </>
  );
}

export default App;
