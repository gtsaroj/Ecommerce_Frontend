
import React from 'react'
import './FeaturedProduct.scss'
import useFetch from '../../Hooks/useFetch'
import Card from "../card/Card"




const FeaturedProducts = ({ type }) => {

  const { Loading, data, Error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

data?.map((item)=>(
  console.log(item.attributes.img.data.attributes.url)
))
  

  return (
    <div className="featuredProduct bg-white p-2 w-full rounded-sm">
      <div className="flex justify-between items-cente gap-60">
        <h1 className='flex items-center text-[20px] justify-start border-b-[4px] border-b-[var(--secondary-dark-text)] w-[180px] '>{type}</h1>
      </div>
      <div className=" flex items-center flex-wrap justify-center gap-2">
        {Error ? "Something went wrong!" :
          Loading ? "loading" : data?.map((item) => (
            <Card props={item} key={item.id} />
          ))}
      </div>

    </div>
  )
}

export default FeaturedProducts
