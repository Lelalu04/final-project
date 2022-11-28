import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import axios from 'axios'

const Header = () => {
    useEffect(() => {
        dataLoad()
    }, [])

    const [data, setData] = useState([])
    async function dataLoad() {
        const res = await axios.get("https://restcountries.com/v3.1/all")
        setData(res.data)
    }
  return (
    <header >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Country" state={{ api: data }}>Country List</Link></li>
            <li><Link to="/Region" state={{ api: data }}>Region List</Link></li>
        </ul>
        <Search></Search>
    </header>
  )
}

export default Header