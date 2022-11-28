import React, { useEffect, useState } from 'react'
import { Link, useLocation, } from 'react-router-dom'
import axios from 'axios'

const Region = () => {
//   useEffect(() => {
//     // dataLoad()
// }, [])

// const [data, setData] = useState([])
// async function dataLoad(region) {
//     console.log(region)
//     const res = await axios.get("https://restcountries.com/v3.1/region/" + region)
//     setData(res.data)
// }
//   let arr = ['Africa', 'Americas', 'Europe', 'Asia', 'Oceania', 'Antarctic']
//     // location.state.api.map(region => !arr.includes(region.region) && arr.push(region.region))
//     const regionList = arr && <ul className="country-list list-decimal">{arr.map((element, index) => <li key={index}>{<Link to={"/Country"} state={{ api: "" }}>{element}</Link>}
//     </li>)}</ul>
//     // console.log(arr)
//   return (
//     <>
//     <div>Region</div>
//     <ul>
//     <li onClick={(e) => dataLoad(e.target.textContent)}>fht</li>
//     {/* <Link to={"/Country"} onClick={(e) => dataLoad(e.target.textContent)} state={{ api: data }}>africa</Link> */}
//     {/* <li key={index}>{<Link to={"/Country"} state={{ api: "" }}>{element}</Link>}</li>
//     <li key={index}>{<Link to={"/Country"} state={{ api: "" }}>{element}</Link>}</li>
//     <li key={index}>{<Link to={"/Country"} state={{ api: "" }}>{element}</Link>}</li>
//     <li key={index}>{<Link to={"/Country"} state={{ api: "" }}>{element}</Link>}</li>
//     <li key={index}>{<Link to={"/Country"} state={{ api: "" }}>{element}</Link>}</li> */}
//     </ul>
//     </>
//   )
}

export default Region