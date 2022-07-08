import React from 'react'
import Featured from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './home.css'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className='homeTitle'>Odkryj nieznane Ci dotąd miejsca</h1>
      <PropertyList/>
      <h1 className='homeTitle'>Odkryj nieznane Ci dotąd miejsca</h1>
      <FeaturedProperties/>
    </div>
    </>
  );
};

export default Home;