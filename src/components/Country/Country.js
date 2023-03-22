import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, area} =props.country
    return (
        <div className='country'>
            <h1>Country Name : {name.common}</h1>
            <p>Area : {area}</p>
            <img src= {flags.png} alt="" />
        </div>
    );
};

export default Country;