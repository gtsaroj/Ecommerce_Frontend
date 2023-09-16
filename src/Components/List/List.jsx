
import React from 'react'
import "./List.scss"
import useFetch from '../../Hooks/useFetch'
import { Link } from 'react-router-dom'
import Card from '../card/Card'


const List = ({ sort, maxPrice, subCats, catId }) => {


  const sortRange = `&sort=pricenew:${sort}`
  const subCatsfilters = subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)

  const { data, Loading, Error } = useFetch(
    `/api/products?populate=*&[filters][categories][:id]=${catId}${subCatsfilters}
    &[filters][newPrice][$lte]= ${maxPrice}${sortRange}`
  );






  return (
    <div className="list">
      {
        Loading ? "loading" : data?.map((item) => (

          <Card props={item} key={item.id} />
        )
        )
      }
    </div>


  )
}

export default List
