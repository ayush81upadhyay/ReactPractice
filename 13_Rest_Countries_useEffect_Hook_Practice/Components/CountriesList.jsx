import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';

const CountriesList = ({query}) => {
    const [countriesData, setCountriesData] = useState([])
    const [count, setCount] = useState(0)
    
    useEffect(()=> {
        console.log("Inside UseEffect");
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((data) => {
            setCountriesData(data)
            setCount(count+1)
        })
        const intID = setInterval(()=>{
            console.log("printing hii")
        }, [1000])
        console.log(intID)
        return ()=>{
            clearInterval(intID)
            console.log('clean Up code of useEffect');
        }
    }, [])

    useEffect(()=>{
        console.log("Hello this is another useEffect");
    }, [count])
    
    return(
        <div className="countries-container">
        {countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {
            return (
                <CountryCard 
                    key={country.name.common}
                    name={country.name.common}
                    flag={country.flags.svg}
                    population={country.population}
                    region={country.region}
                    capital={country.capital?.[0]}
                /> 
            )   
        })}
    </div> 
    )
}

export default CountriesList
