import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

const Header = () => {
  return (
    <header >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Country">Country List</Link></li>
        </ul>
        <Search></Search>
    </header>
  )
}

export default Header