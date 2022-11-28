import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Country = () => {
          useEffect(() => {
            dataLoad()
        }, [])

        const [data, setData] = useState([])
        async function dataLoad() {
            const res = await axios.get("https://restcountries.com/v3.1/all")
            setData(res.data)
        }
        // console.log(data)
        // data && data.map(element => console.log(element.capital))
        const countryList = data && <ul className="country-list list-decimal">{data.map((element, index) => <li key={index}>{<Link to={"/Country/Info"} state={{ api: element }}>{element.name.common}</Link>}
    </li>)}</ul>
  return (
    <div>
        {countryList}
        
    </div>
  )
}

export default Country