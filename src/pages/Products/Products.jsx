import React, { useState } from 'react'
import List from '../../Components/List/List'
import { useParams } from 'react-router-dom'
import "./product.scss"
import useFetch from '../../Hooks/useFetch'



const Products = () => {

  const [maxPrice, setmaxPrice] = useState(100000)
  const [Sort, setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([])

  function handleChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(isChecked
      ? [...selectedSubCats, value]
      : selectedSubCats.filter((item) => item !== value)
    );
  }



  const { id } = useParams();
  const catId = parseInt(id);

  const apiEndpoint = `/api/sub-categories?populate=*&[filters][categories][:id]=${catId}`;
  const { data, Loading, Error } = useFetch(apiEndpoint)



  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h3>Product Categories</h3>
          {data?.map(item => (

            <div className="inputItem" key={item.id}>
              <input type='checkbox' id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h3>Filter by Price</h3>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setmaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h3>Sort by</h3>
          <div className="inputItem">
            <input type="radio" id='asc' value='1' name='price' onChange={(e) => setSort("asc")} />
            <label htmlFor="asc">Price lowest to highest</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='1' name='price' onchange={(e) => setSort("desc")} />
            <label htmlFor="asc">Price highest to lowest</label>
          </div>


        </div>
      </div>
      <div className="right">
        <img className='cartImg'
          src={require('./bg.jpg')}
        />

        <List catId={catId} maxPrice={maxPrice} sort={Sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products
