import React from 'react';
import './home.scss'
import Slider from '../../Components/slider/Slider';
import FeaturedProducts from '../../Components/Features/FeaturedProducts';
import Categories from '../../Components/Categories/Categories';
import Contact from '../../Components/Contact/Contact';


const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />

    </div>
  )
}

export default Home
