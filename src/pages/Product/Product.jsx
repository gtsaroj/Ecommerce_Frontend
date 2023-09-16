import React, { useState } from "react";
import "./products.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [selectedImg, setselectedImg] = useState(`Img`);

  const [quantity, setquantity] = useState(1);

  const id = useParams().id;

  const { data, Loading, Error } = useFetch(
    `/api/products/${id}?populate=*`
  );

  // use of dispatch
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToCart({

      id: data.id,
      title: data?.attributes?.title,
      Img: process.env.REACT_APP_API_UPLOAD + data?.attributes?.Img?.data?.attributes?.url,
      desc: data?.attributes?.desc,
      newPrice: data?.attributes?.newPrice,
      quantity,

    }))
  }

  return (
    <div className="product">
      {Loading ? "Loading" : (<><div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_API_UPLOAD + data?.attributes.Img?.data?.attributes?.url} alt="" onClick={(e) => setselectedImg(`Img`)} />
          <img src={process.env.REACT_APP_API_UPLOAD + data?.attributes.Img2?.data?.attributes?.url} alt="" onClick={(e) => setselectedImg(`Img2`)} />
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_API_UPLOAD + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
        <div className="right">
          <h1>{data?.attributes?.title}</h1>
          <span className="price">{data?.attributes?.newPrice}</span>
          <p>
            {data?.attributes?.desc}
          </p>
          <div className="quantity">
            <button onClick={() => setquantity(prev => prev + 1)}>+</button>
            <h2>{quantity}</h2>
            <button onClick={() => setquantity(prev => ((prev) === 1 ? 1 : prev - 1))}>-</button>
          </div>

          <button className="add" onClick={handleClick} ><AddShoppingCartIcon /></button>
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
      </>
      )}
    </div>
  );
};

export default Product;
