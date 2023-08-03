import React, { useState } from "react";
import "./products.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"

const Product = () => {
  const [selectedImg, setselectedImg] = useState(0);

  const [quantity, setquantity] = useState(0);
  const data = [
    "https://www.angelxp.eu/image/Twitter/nature/plage03.jpg",
    "https://www.angelxp.eu/image/Twitter/nature/plage02.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={data[0]} alt="" onClick={(e) => setselectedImg(data[0])} />
          <img src={data[1]} alt="" onClick={(e) => setselectedImg(data[1])} />
        </div>
        <div className="mainImg">
          <img src={selectedImg} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          totam saepe iure, repellendus doloremque ab repellat. Illo ab expedita
          beatae, consectetur, explicabo dolore fugiat harum amet suscipit et,
          blanditiis impedit?
        </p>
        <div className="quantity">
          <button onClick={() => setquantity(prev => prev + 1)}>+</button>
          <h2>{quantity}</h2>
          <button onClick={() => setquantity(prev => ((prev) === 1 ? 1 : prev - 1))}>-</button>
        </div>

        <button className="add"><AddShoppingCartIcon /></button>
        <div className="link">
          <div className="item"><FavoriteBorderIcon />Add To Wish List</div>
          <div className="item"><BalanceIcon />Add To COMPARE</div>
        </div>
        <div className="info">
          <span>vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <div className="info">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQ</span>
        </div>

      </div>
    </div>
  );
};

export default Product;
