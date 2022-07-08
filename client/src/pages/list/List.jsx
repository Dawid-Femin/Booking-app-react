import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './list.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';


const List = () => {

  const location = useLocation();
  const[destination, setDestination] = useState(location.state.destination)
  const[date, setDate] = useState(location.state.date)
  const[openDate, setOpenDate] = useState(false)
  const[options, setOptions] = useState(location.state.date)

  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className="listContainer">
          <div className="listWrapper">
              <div className="listSearch">
                <h1 className='lsTitle'>Szukaj</h1>
                <div className="lsItem">
                  <label>Lokalizacja</label>
                  <input placeholder={destination} type="text" />
                </div>
                <div className="lsItem">
                  <label>Data rezerwacji</label>
                  <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'dd/MM/yyyy')} do ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                  {openDate && (<DateRange 
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                  )}
                </div>
                <div className="lsItem">
                  <label>Options</label>
                  <div className="lsOptions">

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Minimalna cena<small> za noc</small></span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Maksymalna cena<small> za noc</small></span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText" >Dorośli<small> za noc</small></span>
                    <input min={1} placeholder={options.adult} type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Dzieci<small> za noc</small></span>
                    <input min={0} placeholder={options.children} type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Pokoje<small> za noc</small></span>
                    <input min={1} placeholder={options.room} type="number" className="lsOptionInput" />
                  </div>
                  </div>
                </div>
                <button>Szukaj</button>
              </div>
              <div className="listResult">
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default List;