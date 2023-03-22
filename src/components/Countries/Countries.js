import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [Countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    return (
        <div className='countries'>
            <h3>Hey this is me Bala , ashis bala</h3>
            {
                Countries.map(country=> <Country country={country} key={country.cca2} ></Country> )
            }
        </div>
    );
};

export default Countries;