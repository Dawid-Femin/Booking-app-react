import React from 'react';
import './propertyList.css'
import useFetch from '../../hooks/useFetch';

const propertyList = () => {

    const { data, loading, error} = useFetch(
        "/hotels/countByType?cities=berlin,madrid,london"
    );

  return (
    <div className="pList">
        {loading ? ("loading") : (<>
        
        <div className="pListItem">
            <img className='pListImg' src="https://us.123rf.com/450wm/mistervlad/mistervlad2001/mistervlad200101270/137255745-londyn-wielka-brytania-kwiecie%C5%84-2018-piccadilly-circus-o-zachodzie-s%C5%82o%C5%84ca.jpg?ver=6" alt="" />
            <div className="pListTitles">
                <h1>Hotele</h1>
                <h2>3 hotele</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://us.123rf.com/450wm/mistervlad/mistervlad2001/mistervlad200101270/137255745-londyn-wielka-brytania-kwiecie%C5%84-2018-piccadilly-circus-o-zachodzie-s%C5%82o%C5%84ca.jpg?ver=6" alt="" />
            <div className="pListTitles">
                <h1>Apartamenty</h1>
                <h2>2 apartamenty</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://us.123rf.com/450wm/mistervlad/mistervlad2001/mistervlad200101270/137255745-londyn-wielka-brytania-kwiecie%C5%84-2018-piccadilly-circus-o-zachodzie-s%C5%82o%C5%84ca.jpg?ver=6" alt="" />
            <div className="pListTitles">
                <h1>Wille</h1>
                <h2>0 Willi</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://us.123rf.com/450wm/mistervlad/mistervlad2001/mistervlad200101270/137255745-londyn-wielka-brytania-kwiecie%C5%84-2018-piccadilly-circus-o-zachodzie-s%C5%82o%C5%84ca.jpg?ver=6" alt="" />
            <div className="pListTitles">
                <h1>Domki letniskowe</h1>
                <h2>4 domki letniskowe</h2>
            </div>
        </div>
        </>)}
    </div>
  )
}

export default propertyList