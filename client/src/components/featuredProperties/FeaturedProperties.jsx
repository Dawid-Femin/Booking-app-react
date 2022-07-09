import React from 'react';
import useFetch from '../../hooks/useFetch';
import './featuredProperties.css';


const FeaturedProperties = () => {

    const { data, loading, error } = useFetch('/hotels?featured=true&limit=2');

  return (
        <div className="fp">
            {loading ? "Ładowanie" : <>
            { data.map(item => (

                <div className="fpItem" key={item._id} >
                <img src="https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/53/berlin-poleca-sie-na-wiosne-orientalne-ogrody-sztuka-wspolczesna-i-samuraje.jpeg" alt="" className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Ceny od {item.cheapestPrice} PLN</span>
                {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                </div>}
            </div>
            ))}
            </>
            }
        </div>
  )
}

export default FeaturedProperties;