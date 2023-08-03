import React from 'react';
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accesories</span>
        <span>New Arrivals</span>
      </div>
      <div className="item">
        <h3>Links</h3>
        <span></span>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div className="item">
        <h3>About Us</h3>
        <span>Lorem ipsum dolor sit amet,
           consectetur adipisicing elit. Ad consequatur repudia
           ndae, animi ducimus facere neque error? Autem volup
           tates animi officia!</span>
      </div>
      <div className="item">
        <h3>Contact</h3>
        <span>Lorem ipsum dolor sit a
          met consectetur adipisicing elit. Cum ex impedit modi eveniet nisi tenetur possimu
          s in nostrum laudantium corrupti?</span>
      </div>

     </div>
     <div className="bottom">
      <div className="left">
        copyright saroj-coder
      </div>
      <div className="right">
        <img src='/client/ecommerce-site/public/photos/payment.jpg' alt="" />
      </div>
     </div>
    </div>
  )
}

export default Footer
