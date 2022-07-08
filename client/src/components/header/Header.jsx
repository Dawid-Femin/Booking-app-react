import React from 'react';
import './header.css';
import { BiBed } from 'react-icons/bi';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions(prev => { return {
      ...prev, [name]: operation === 'i' ? options[name] +1  : options[name] -1,
    };
    });
  };

  return (
    <div className='header'>
        <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
            <div className="headerList">
                <div className="headerListItem active">
                    <BiBed/>
                    <span>Hotele</span>
                </div>
            </div>

            { type !== 'list' &&
          <>
            <h1 className='headerTitle'>Szukasz wymarzonego hotelu?</h1>
            <p className='headerDesc'>U nas znajdziesz oferty hoteli, domów oraz wielu innych obiektów</p>
            <button className='headerBtn'>Zaloguj / Zarejestruj się</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <BiBed/>
                <input type="text" 
                placeholder='Dokąd się wybierasz?' 
                className='headerSearchInput' 
                />
              </div>
              <div className="headerSearchItem">
                <BsFillCalendarCheckFill/>
                <span onClick={() => { setOpenDate(!openDate) }} className='headerSearchText'>{`${format(date[0].startDate, 'dd/MM/yyy')} do ${format(date[0].endDate, 'dd/MM/yyy')}`}</span>
                {openDate && 
                <DateRange 
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date} 
                className='date'
                />
                }
              </div>
              <div className="headerSearchItem">
                <BsPeopleFill/>
                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`Dorosli: ${options.adult} Dzieci: ${options.children} Pokoje: ${options.room}`}</span>
                {openOptions &&
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Dorośli</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption('adult', 'd')}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Dzieci</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption('children', 'd')}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>+</button>
                  </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Pokoje</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption('room', 'd')}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>+</button>
                  </div>
                  </div>
                </div>
                }
              </div>
              <div className="headerSearchItem">
                <button className='headerBtnTwo'>Szukaj</button>
              </div>
            </div>
          </>
        }
        </div>
    </div>
  )
}

export default Header;