import React from 'react';
import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h3>Categories</h3>
          <div className="box">
            <span> <Link to="/products/:id" className='link' >products</Link></span>
            <span><Link to="/products/:id" className='link'>Men</Link></span>
            <span><Link to="/products/:id" className='link'>Shoes</Link></span>
            <span><Link to="/products/:id" className='link'>Accesories</Link></span>
            <span><Link to="/products/:id" className='link'>New </Link></span>
          </div>
        </div>
        <div className="item">
          <h3>Links</h3>
          <div className="box">
            <span> <Link to="/products/:id" className='link' > products</Link></span>
            <span><Link to="/products/:id" className='link'>Men</Link></span>
            <span><Link to="/products/:id" className='link'>Shoes</Link></span>
            <span><Link to="/products/:id" className='link'>Accesories</Link></span>
            <span><Link to="/products/:id" className='link'>New </Link></span>
          </div>
        </div>
        <div className="item">
          <h3>About Us</h3>
          <div className="box">
            <span className='link'>Welcome to Online Saroj Mart, founded by Saroj GT. We
              offer a reliable online shopping </span>
          </div>
        </div>
        <div className="item">
          <h3>Contact</h3>
          <div className="box">
            <span className='link'>Lorem ipsum dolor sit a
              met consectetur adipisicing elit. Cum </span>
          </div>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          copyright saroj-coder
        </div>

      </div>
    </div>
  )
}

export default Footer
