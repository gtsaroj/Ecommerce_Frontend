
import React, { useEffect, useState } from 'react'
import './FeaturedProduct.scss'
import Card from '../card/Card';
import { fetch_api_data } from './util/api';

const FeaturedProducts = ({ type }) => {



  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch_api_data('/products').then((res) => console.log(res))
  }


  const [products, setProducts] = useState([]);

  const data = [
    {
      id: 0,
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU",
      Img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur_kFJvbAU8z4ijzd9kT1xLwVWBIvUl86jg&usqp=CAU",
      isNew: true,
      oldPrice: 415,
      title: "Monkey Sticker",
      newPrice: 1000
    },

    {
      id: 2,
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU",
      Img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur_kFJvbAU8z4ijzd9kT1xLwVWBIvUl86jg&usqp=CAU",
      isNew: true,
      oldPrice: 415,
      title: "Monkey Sticker",
      newPrice: 300
    },

    {
      id: 3,
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU",
      Img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur_kFJvbAU8z4ijzd9kT1xLwVWBIvUl86jg&usqp=CAU",
      isNew: true,
      oldPrice: 415,
      title: "Monkey Sticker",
      newPrice: 500
    },

    {
      id: 4,
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU",
      Img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur_kFJvbAU8z4ijzd9kT1xLwVWBIvUl86jg&usqp=CAU",
      isNew: true,
      oldPrice: 415,
      title: "Monkey Sticker",
      newPrice: 800
    },

    {
      id: 5,
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU",
      Img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur_kFJvbAU8z4ijzd9kT1xLwVWBIvUl86jg&usqp=CAU",
      isNew: true,
      oldPrice: 415,
      title: "Monkey Sticker",
      newPrice: 145
    },
  ]



  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>{type}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Possimus dignissimos tempore cumque tempora debitis natus
          veritatis veniam earum rem iste.</p>
      </div>
      <div className="bottom">
        <Card
          key={data[0].id}
          img={data[0].Img}
          img2={data[0].Img2}
          oldPrice={data[0].oldPrice}
          newPrice={data[0].newPrice}
          title={data[0].title}
          isNew={data[0].isNew}
        />
        <Card
          key={data[0].id}
          img={data[1].Img}
          img2={data[1].Img2}
          oldPrice={data[1].oldPrice}
          newPrice={data[1].newPrice}
          title={data[1].title}
          isNew={data[1].isNew}
        />
        <Card
          key={data[0].id}
          img={data[2].Img}
          img2={data[2].Img2}
          oldPrice={data[2].oldPrice}
          newPrice={data[2].newPrice}
          title={data[2].title}
          isNew={data[2].isNew}
        />
        <Card
          key={data[0].id}
          img={data[3].Img}
          img2={data[3].Img2}
          oldPrice={data[3].oldPrice}
          newPrice={data[3].newPrice}
          title={data[3].title}
          isNew={data[3].isNew}
        />
        <Card
          key={data[0].id}
          img={data[4].Img}
          img2={data[4].Img2}
          oldPrice={data[4].oldPrice}
          newPrice={data[4].newPrice}
          title={data[4].title}
          isNew={data[4].isNew}
        />
      </div>

    </div>
  )
}

export default FeaturedProducts
