import React, { useState } from 'react'
import List from '../../Components/List/List'
import { useParams } from 'react-router-dom'
import "./product.scss"



const Products = () => {

const catId = parseInt(useParams().id);
const [maxPrice, setmaxPrice] = useState(1000)
const [Sort, setSort] = useState(null)
  return (
    <div className='products'>
        <div className="left">
          <div className="filterItem">
            <h3>Product Categories</h3>
            <div className="inputItem">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor="1">shoes</label>
            </div>
              <div className="inputItem">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor="1">Skirts</label>
            </div>
              <div className="inputItem">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor="1">T-shirt</label>
            </div>
              <div className="inputItem">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor="1">Jeans</label>
            </div>
          </div>
          <div className="filterItem">
            <h3>Filter by Price</h3>
            <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} id='3' onChange={(e) => setmaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h3>Sort by</h3>
            <div className="inputItem">
              <input type="radio" id='asc' value='1' name='price' onChange={(e) => setSort("asc")}/>
              <label htmlFor="asc">Price lowest to highest</label>
            </div>
            <div className="inputItem">
              <input type="radio" id='desc' value='1' name='price' onchange ={(e)=> setSort("desc")} />
              <label htmlFor="asc">Price highest to lowest</label>
            </div>


          </div>
        </div>
        <div className="right">
          <img className='cartImg'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur_kFJvbAU8z4ijzd9kT1xLwVWBIvUl86jg&usqp=CAU" 
          alt="" 
          />
        
        <List  cardId ={catId} maxPrice ={maxPrice} Sort = {Sort}/>
        </div>
    </div>
  )
}

export default Products
