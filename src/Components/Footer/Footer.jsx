import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-[var(--light-text)] py-5 flex flex-col items-center justify-center gap-5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--dark-text)]'>
      <div>
        <h1 className="text-4xl text-[var(--primary-color)] flex items-center justify-center gap-[2px]">
          X <span className="text-[var(--notification-color)]">MATO</span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-36 text-[var(--light-text)]">
        <div className="flex flex-col items-baseline justify-center">
          <h3 className='font-semibold'>Categories</h3>
          <div className="flex flex-col items-baseline justify-center">
            <span> <Link to="/products/:id" className='text-[var(--light-text)]' >products</Link></span>
            <span><Link to="/products/:id" className='text-[var(--light-text)]'>Men</Link></span>
            <span><Link to="/products/:id" className='text-[var(--light-text)]'>Shoes</Link></span>
            <span><Link to="/products/:id" className='text-[var(--light-text)]'>New </Link></span>
          </div>
        </div>
        <div className="flex flex-col items-baseline justify-center">
          <h3 className='font-semibold'>Links</h3>
          <div className="flex flex-col items-baseline justify-center">
            <span> <Link to="/products/:id" className='text-[var(--light-text)]' > products</Link></span>
            <span><Link to="/products/:id" className='text-[var(--light-text)]'>Men</Link></span>
            <span><Link to="/products/:id" className='text-[var(--light-text)]'>Shoes</Link></span>
            <span><Link to="/products/:id" className='text-[var(--light-text)]'>Accesories</Link></span>
            <span><Link to="/products/:id" className='text-[var(--light-text)]'>New </Link></span>
          </div>
        </div>
        <div className="flex flex-col items-baseline justify-center">
          <h3 className='font-semibold'>About us</h3>
          <div className="flex flex-col items-baseline justify-center w-[230px] ">
            <span className='text-[var(--light-text)]'>Welcome to Online Saroj Mart, founded by Saroj GT. We
              offer a reliable online shopping </span>
          </div>
        </div>
        <div className="flex flex-col items-baseline justify-center">
          <h3 className='font-semibold'>Contact</h3>
          <div className="flex flex-col items-baseline justify-center w-[200px]">
            <span className='text-[var(--light-text)]'>Lorem ipsum dolor sit a
              met consectetur adipisicing elit. Cum </span>
          </div>
        </div>

      </div>
      <div className="w-full border-t-[1px] border-[var(light-text)]">
        <div className="left">
          copyright saroj-coder
        </div>

      </div>
    </div>
  )
}

export default Footer
