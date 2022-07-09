import React from 'react';
import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
    const { data, loading, error } = useFetch(
      "/hotels/countByCity?cities=berlin,madrid,london"
    );

  return (
    <div className="featured">
        { loading ? "Ładowanie proszę czekać" : <><div className="featuredItem">
            <img className='featuredImg' src="https://corporate.expondo.pl/wp-content/uploads//2020/01/Mask-Group-14.jpg" alt="Warsaw" />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h1>{data[0]} Hoteli</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://corporate.expondo.pl/wp-content/uploads//2020/01/Mask-Group-14.jpg" alt="Warsaw" />
            <div className="featuredTitles">
                <h1>Madryt</h1>
                <h1>{data[1]} Hoteli</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://corporate.expondo.pl/wp-content/uploads//2020/01/Mask-Group-14.jpg" alt="Warsaw" />
            <div className="featuredTitles">
                <h1>Londyn</h1>
                <h1>{data[2]} Hotele</h1>
            </div>
        </div>
    </>
    }
    </div>
  )
}

export default Featured;