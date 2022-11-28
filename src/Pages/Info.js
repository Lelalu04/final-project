import { useLocation } from 'react-router-dom'

const Info = () => {
    const location = useLocation()
    const { api } = location.state

    console.log(api)
    console.log(api.coatOfArms.svg)
    const capital = api.capital > 1 ? api.capital.map((element, index) => <p key={index}>{element}</p>) : <p>{api.capital}</p>
    const coatOfArms = api.coatOfArms.svg && <img className="w-16 md:w-32 lg:w-80 rounded-3xl" src={api.coatOfArms.svg}></img>
    const continents = api.continents > 1 ? api.continents.map((element, index) => <p key={index}>{element}</p>) : <p>{api.continents}</p>
    const flags = api.flags.svg && <img className="w-16 md:w-32 lg:w-80 rounded-3xl" src={api.flags.svg}></img>
    const maps = api.maps.googleMaps && <a href={api.maps.googleMaps} >Look at the map</a>
    const population = api.population && <p>Population: {api.population}</p>
    const region = api.region && <p>Region: {api.region}</p>




    // const title = api ? api.name.map(element => element) : "fds"
    return (
        <div className="grid auto-rows-2 gap-2.5 capital-container ">

            <div className="title-container">
                <h1 className="title">{api.name.common}</h1>
            </div>
            <div className="content-container">
                <div className="image-container rounded-3xl">
                <h2>Coat of arms</h2>
                    <div className="image">
                        {flags}
                    </div>
                </div>
                <div className="country-info rounded-3xl">
                <h5>Contry info</h5>
                {region}
                {population}
                {maps}
                {continents}
                {capital}

                {/* {common} */}
                </div>
                <div className="image-container rounded-3xl">
                    <h3>Coat of arms</h3>
                    <div className="image">
                        {coatOfArms}
                    </div>
                </div>


            </div>
            {/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accomodation for your team</a>
                        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div> */}
        </div>


        //  
        // <h1>{api.name.official}</h1>
        // {coatOfArms}
        // {continents}
        // {flags}
        // {maps}
        // {population}
        // {region} 
    )
}

export default Info