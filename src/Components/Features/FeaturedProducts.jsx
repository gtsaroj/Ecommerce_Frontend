
import React from 'react'
import './FeaturedProduct.scss'
import useFetch from '../../Hooks/useFetch'
import Card from "../card/Card"




const FeaturedProducts = ({ type }) => {

  const { Loading, data, Error } = useFetch(`/api/products?populate=*&[filters][type][$eq]=${type}`)

console.log(data)
  

  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>{type}</h1>
        <p>Experience the latest clothing trends. From urban chic to timeless
          classics, our curated collection lets you express
          your style. Elevate your wardrobe today..</p>
      </div>
      <div className="bottom">
        {Error ? "Something went wrong!" :
          Loading ? "loading" : data?.map((item) => (
            <Card props={item} key={item.id} />
          ))}
      </div>

    </div>
  )
}

export default FeaturedProducts
