import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
          <div className="row">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU" alt="" />
            <button>
            <Link className='link' to="/products:id">Sale</Link>
            </button>
          </div>
          <div className="row">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU" alt="" />
            <button>
            <Link className='link' to="/products:id">MAN</Link>
            </button>
               </div>
        </div>
        <div className="col">
          <div className="row">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU" alt="" />
            <button>
            <Link className='link' to="/products:id">Women</Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU" alt="" />
            <button>
            <Link className='link' to="/products:id">Fashion</Link>
            </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU" alt="" />
            <button>
            <Link className='link' to="/products:id">Sale</Link>
            </button>
              </div>
            </div>
            </div>
            <div className="row">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU" alt="" />
            <button>
            <Link className='link' to="/products:id">Sale</Link>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Categories
