import { Link } from "react-router-dom"

function BeersList({ Beers }){
    return (
        <>
            {Beers.map((beer) => {
               return( 
                <div className="beerContainer" key={beer._id}>

                <img src={beer.image_url} alt="beerImg" />
               
                <h3>Beer Name: {beer.name}</h3>
                <h3>Tagline: {beer.tagline}</h3>
                <h3>Contributor: {beer.contributed_by}</h3>

                <Link to={`/beers/${beer._id}`}>More Details</Link>

                </div>
               ) 
            })}
        </>
    )
}

export default BeersList