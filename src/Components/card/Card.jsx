import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss';

const Card = ({ props }) => {

  return (
    < Link className="link" to={`/product/${props?.id}`}>
      <div className="card">
        <div className="image">
          {props.attributes.isNew && <span>New season</span>}
          <img src={   props.attributes.img.data.attributes.url} alt="" className="mainImg" />
          <img src={  props?.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
        </div>

        <h2>{props.attributes.title}</h2>
        <div className="prices">
          <h3>${props.attributes.oldprice}</h3>
          <h3>${props.attributes.newprice}</h3>
        </div>
      </div>

    </Link>

  )
}

export default Card
