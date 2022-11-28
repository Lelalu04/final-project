import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Country = () => {
  const location = useLocation()
  console.log(location.state)

        const countryList = location.state.api && <ul className="country-list list-decimal">{location.state.api.map((element, index) => <li key={index}>{<Link to={"/Country/Info"} state={{ api: element }}>{element.name.common}</Link>}
    </li>)}</ul>
  return (
    <div>
        {countryList}
    </div>
  )
}

export default Country