import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={require('./dom/sale.jpg')} alt="" />
          <button>
            <Link className='link' to="/products/:id">Sale</Link>
          </button>
        </div>
        <div className="row">
          <img src={require('./dom/Male.avif')} alt="" />
          <button>
            <Link className='link' to="/products/:id">MAN</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={require('./dom/woman.avif')} alt="" />
          <button>
            <Link className='link' to="/products/:id">Women</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={require('./dom/fashion.avif')} alt="" />
              <button>
                <Link className='link' to="/products/:id">Fashion</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={require('./dom/Female.jpg')} alt="" />
              <button>
                <Link className='link' to="/products/:id">Sale</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={require('./dom/Female.jpg')} alt="" />
          <button>
            <Link className='link' to="/products/:id">Sale</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
