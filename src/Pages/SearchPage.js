import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SearchPage = () => {
    const location = useLocation()

    const [data , setData ] = useState(null)
    useEffect(() => {
        getData()
    }, [location.state.text])
    
    console.log(location.state.text)
    async function getData() {
        const res = await axios.get("https://restcountries.com/v3.1/name/"+location.state.text)
        setData(res.data)
    }
    // data && console.log(data.data)
    const countryList = data ? <ul className="country-list list-decimal">{data.map((element, index) => <li key={index}>{<Link to={"/Country/Info"} state={{ api: element }}>{element.name.common}</Link>} 
    </li>)}</ul> : <h2>Sorry we don't have the result</h2>
    
  return (
    <div className="">
        SearchPage
    {countryList}
        </div>
  )
}

export default SearchPage