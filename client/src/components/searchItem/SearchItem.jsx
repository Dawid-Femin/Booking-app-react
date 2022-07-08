import React from 'react';
import './searchItem.css';

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/310031714.jpg?k=952f8e535a4cde710353b75711390f01e4cfdb65978842a6e30da08466a218cf&o=&hp=1" alt="" className="siImg" />
        <div className="siDesc">
        <h1 className="siTitle">Willa Mazowiecka</h1>
        <span className="siDistance">100m od centrum</span>
        <span className="siTaxiOp">Darmowy transport z lotniska</span>
        <span className="siSubtitle">
          Studio Apartment z klimatyzacją
        </span>
        <span className="siFeatures">1 łazienka</span>
        <span className="siCancelOp">Darmowa rezygnacja </span>
        <span className="siCancelOpSubtitle">
        Możesz zrezygnować później, więc zarezerwuj apartament za niższą cenę
        </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Bardzo dobry</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">280 PLN</span>
                <span className="siTaxOp">Obejmuje podatki i opłaty</span>
                <button className='siCheckButton'>Sprawdź dostępność</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem