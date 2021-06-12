import { useState, useEffect } from 'react';
import './App.css';

export const SHOPS_FAKE = [
  {
    id: 1,
    types: ['DEMO STORE'],
    country: 'HU',
    city: 'Budapest',
    province: 'Budapest',
    owned: true,
    store_code: '-DEMO844',
    business_name: 'Demo Boutique'
  },
  {
    id: 2,
    types: ['TEST'],
    country: 'IT',
    city: 'Roma',
    province: 'RM',
    owned: true,
    store_code: 'DEMO001',
    business_name: 'Demo'
  },
  {
    id: 3,
    types: ['DEMO TEST'],
    country: 'FR',
    city: 'Paris',
    province: 'Paris',
    owned: true,
    store_code: '-DEMO844',
    business_name: 'X Boutique'
  },
  {
    id: 4,
    types: ['DEMO STORE'],
    country: 'BE',
    city: 'Bruxelles',
    province: 'XXXX',
    owned: true,
    store_code: 'DEMO065',
    business_name: 'Demo Boutique'
  },
  {
    id: 5,
    types: ['DEMO STORE'],
    country: 'BE',
    city: 'Knokke',
    province: 'YYYYYY',
    owned: true,
    store_code: 'DEMO066',
    business_name: 'Demo Boutique'
  },
  {
    id: 6,
    types: ['DEMO STORE'],
    country: 'BG',
    city: 'Sofia',
    province: '',
    owned: true,
    store_code: 'DEMO067',
    business_name: 'Demo Boutique'
  },
  {
    id: 7,
    types: ['DEMO STORE'],
    country: 'CN',
    city: '&#21271;&#20140;',
    province: 'VVVVVV',
    owned: true,
    store_code: 'DEMO068',
    business_name: 'Demo Boutique'
  },
  {
    id: 8,
    types: ['DEMO STORE'],
    country: 'CL',
    city: '&#2f8ehdYTfs;',
    province: '',
    owned: false,
    store_code: 'DEMO068',
    business_name: 'CL Boutique'
  },
  {
    id: 9,
    types: ['EXAMPLE STORE'],
    country: 'RP',
    city: '&#kd9n93383ndu;',
    province: '',
    owned: true,
    store_code: 'DEMO089',
    business_name: 'RP Boutique'
  },
  {
    id: 10,
    types: ['DEMO STORE'],
    country: 'CN',
    city: '&#21271;&#20140;',
    province: '',
    owned: true,
    store_code: 'DEMO068',
    business_name: 'Demo Boutique'
  }
];

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
    setLoadData(
      loadData?.filter(el => el.business_name === event.target.value)
    );
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
    setLoadData(loadData?.filter(el => el.country === event.target.value));
  }
  const filter_COUNTRY = loadData?.map((c, index) => {
    return (
      <option key={index} value={c.country}>
        {c.country}
      </option>
    );
  });

  // Cities
  function gestisciCITY(event) {
    setData(data => ({ ...data, city_react: event.target.value }));
    setLoadData(loadData?.filter(el => el.city === event.target.value));
  }
  const filter_CITY = loadData?.map((c, index) => {
    return (
      <option key={index} value={c.city}>
        {c.city}
      </option>
    );
  });

  // Province
  function gestisciPROVINCE(event) {
    setData(data => ({ ...data, province_react: event.target.value }));
    setLoadData(loadData?.filter(el => el.province === event.target.value));
  }
  const filter_PROVINCE = loadData?.map((c, index) => {
    return (
      <option key={index} value={c.province}>
        {c.province}
      </option>
    );
  });

  // TYPES
  function gestisciTYPE(event) {
    setData(data => ({ ...data, types_react: event.target.value }));
    setLoadData(loadData?.filter(el => el.types[0] === event.target.value));
  }
  const filter_TYPE = loadData?.map((c, index) => {
    return (
      <option key={index} value={c.types[0]}>
        {c.types[0]}
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
