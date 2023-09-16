import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss';

const Card = ({ props }) => {
  return (
    < Link className="link" to={`/product/${props.id}`}>
      <div className="card">
        <div className="image">
          {props.attributes.IsNew && <span>New season</span>}
          <img src={props?.attributes?.Img?.data?.attributes?.url} alt="" className="mainImg" />
          <img src={props?.attributes?.Img2?.data?.attributes?.url} alt="" className="secondImg" />
        </div>

        <h2>{props.attributes.title}</h2>
        <div className="prices">
          <h3>${props.attributes.oldPrice}</h3>
          <h3>${props.attributes.newPrice}</h3>
        </div>
      </div>

    </Link>

  )
}

export default Card
