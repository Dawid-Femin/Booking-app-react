import React from 'react';
import './featured.css';

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className='featuredImg' src="https://corporate.expondo.pl/wp-content/uploads//2020/01/Mask-Group-14.jpg" alt="Warsaw" />
            <div className="featuredTitles">
                <h1>Warszawa</h1>
                <h1>5 Hoteli</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://corporate.expondo.pl/wp-content/uploads//2020/01/Mask-Group-14.jpg" alt="Warsaw" />
            <div className="featuredTitles">
                <h1>Londyn</h1>
                <h1>6 Hoteli</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://corporate.expondo.pl/wp-content/uploads//2020/01/Mask-Group-14.jpg" alt="Warsaw" />
            <div className="featuredTitles">
                <h1>Barcelona</h1>
                <h1>3 Hotele</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured;