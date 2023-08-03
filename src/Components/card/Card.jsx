import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss';

const Card = (props) => {
  return (
  < Link className="link" to={`/product/${props.id}`}>
<div className="card">
    <div className="image">
        {props.isNew && <span>New season</span>}
    <img src={props.img} alt="" className="mainImg" />
    <img src={props.img2} alt="" className="secondImg" />
    </div>

<h2>{props.title}</h2>
<div className="prices">
    <h3>${props.oldPrice}</h3>
    <h3>${props.newPrice}</h3>
</div>
</div>

</Link>
   
  )
}

export default Card
