import React from 'react';
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { BsFillPinFill } from "react-icons/bs";

const Hotel = () => {
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/236461715.jpg?k=e6e71a8e43639153c40d4cdc60ab09f8c4ed60454f3819221b8f026bb9d4c5d6&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/236461715.jpg?k=e6e71a8e43639153c40d4cdc60ab09f8c4ed60454f3819221b8f026bb9d4c5d6&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/236461715.jpg?k=e6e71a8e43639153c40d4cdc60ab09f8c4ed60454f3819221b8f026bb9d4c5d6&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/236461715.jpg?k=e6e71a8e43639153c40d4cdc60ab09f8c4ed60454f3819221b8f026bb9d4c5d6&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/236461715.jpg?k=e6e71a8e43639153c40d4cdc60ab09f8c4ed60454f3819221b8f026bb9d4c5d6&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/236461715.jpg?k=e6e71a8e43639153c40d4cdc60ab09f8c4ed60454f3819221b8f026bb9d4c5d6&o=&hp=1'
    },
  ];

  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Zarezerwuj teraz!</button>
          <h1 className="hotelTitle">Hotel x</h1>
          <div className="hotelAddress">
            <BsFillPinFill/>
            <span>27 Podwisłocze, Nowe Miasto, 26-200, Rzeszów, Polska</span>
          </div>
          <span className="hotelDistance">
            Odległość do centrum miasta wynosi 300m
          </span>
          <span className='hotelPriceHighlight'>
            Zarezerwuj noc za 222 PLN w tej nieruchomości i otrzymaj darmowy transfer z lotniska
          </span>
          <div className="hotelImages">
            {photos.map(photo =>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className='hotelImg' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className='hotelTitle'>Zostań w Rzeszowie!</h1>
              <p className='hotelDesc'>
              Hotel Ibis Warszawa Stare Miasto usytuowany jest 10 minut spacerem od pięknej warszawskiej Starówki. Obiekt ten oferuje przestronne, urządzone w klasycznym stylu pokoje z WiFi i telewizorem z dostępem do kanałów satelitarnych.
              Codziennie rano w hotelowym bistro Ibis Kitchen serwowane jest urozmaicone śniadanie w formie bufetu. W barze przez cały dzień podawane są rozmaite wina i piwa.
              Pokoje w hotelu Ibis Stare Miasto są nowocześnie urządzone i klimatyzowane. Obejmują one miejsce do pracy. W każdym pokoju znajduje się łazienka z suszarką do włosów i zestawem kosmetyków. W cenę zakwaterowania wliczono butelkę wody.
              </p>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default Hotel