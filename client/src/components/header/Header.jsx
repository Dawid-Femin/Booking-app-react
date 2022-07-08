import React from 'react';
import './header.css';
import {BiBed} from 'react-icons/bi';



const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <BiBed/>
                    <span>Hotele</span>
                </div>
            </div>
            <h1 className='headerTitle'>Szukasz wymarzonego hotelu?</h1>
            <p className='headerDesc'>U nas znajdziesz oferty hoteli, domów oraz wielu innych obiektów</p>
            <button className='headerBtn'>Zaloguj / Zarejestruj się</button>
        </div>
    </div>
  )
}

export default Header;
