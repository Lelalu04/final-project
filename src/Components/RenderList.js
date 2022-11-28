
import { Link } from 'react-router-dom'

const RenderCommon = ({data, linkTo, text}) => {
       
        const countryList = data && <ul className="country-list list-decimal">{data.map((element, index) => <li key={index}>{<Link to={linkTo} state={{ api: element }}>{element}</Link>}
    </li>)}</ul> 
  return (
    <div>
      <h2>{text}</h2>
        {countryList}
    </div>
  )
}

export default RenderCommon