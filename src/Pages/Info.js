import { useLocation } from 'react-router-dom'

const Info = () => {
    const location = useLocation()
    const { api } = location.state
    
    console.log(api)
    console.log(api.coatOfArms.svg)
    const capital = api.capital > 1 ? api.capital.map((element, index) => <p key={index}>{element}</p>) : <p>{api.capital}</p>
    const coatOfArms = api.coatOfArms.svg && <img className="w-16 md:w-32 lg:w-80 rounded-3xl" src={api.coatOfArms.svg}></img>
    const continents = api.continents > 1 ? api.continents.map((element, index) => <p key={index}>{element}</p>) : <p>{api.continents}</p>
    const flag = api.flags.svg && <img className="w-16 md:w-32 lg:w-80 rounded-3xl" src={api.flags.svg}></img>
    const maps = api.maps.googleMaps && <a href={api.maps.googleMaps} >Look at the map</a>
    const population = api.population && <p>Population: {api.population}</p>
    const region = api.region && <p>Region: {api.region}</p>

    return (
        <div className="grid auto-rows-2 gap-2.5 capital-container ">

            <div className="title-container w-full rounded-3xl">
                <h1 className="title text-center">{api.name.common}</h1>
            </div>
            <div className="content-container ">
                <div className="image-container rounded-3xl">
                <h2 className="image-text text-center">Flag</h2>
                    <div className="image">
                        {flag}
                    </div>
                </div>
                <div className="country-info rounded-3xl p-5">
                <h5 className="country-info-text text-center">Contry info</h5>
                {region}
                {population}
                {maps}
                {continents}
                {capital}
                </div>
                <div className="image-container rounded-3xl">
                    <h3 className="image-text text-center">Coat of arms</h3>
                    <div className="image">
                        {coatOfArms}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info