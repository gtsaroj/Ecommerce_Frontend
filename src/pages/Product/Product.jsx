import React, { useState } from "react";
import "./products.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import ReactLoading from "react-loading";

const Product = () => {
  const [selectedImg, setselectedImg] = useState(`img`);

  const [quantity, setquantity] = useState(1);

  const id = useParams().id;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data?.attributes?.title,
        Img: data?.attributes?.img?.data?.attributes?.url,
        desc: data?.attributes?.desc,
        newPrice: data?.attributes?.newprice,
        quantity,
      })
    );
  };

  return (
    <div className="product relative px-5">
      <div
        className={`flex md:flex-row flex-col justify-evenly gap-20 items-center w-full ${
          loading ? "blur-sm" : ""
        }`}
      >
        <div className="left flex flex-col-reverse   md:flex-row">
          <div className="images flex md:flex-col flex-row gap-2">
            <img
              src={data?.attributes.img?.data?.attributes?.url}
              alt=""
               className="w-full cursor-pointer  h-[150px]" onClick={(e) => setselectedImg(`img`)}
            />
            <img
              src={data?.attributes.img2?.data?.attributes?.url}
              alt=""
              className="w-full  cursor-pointer h-[150px]" 
              onClick={(e) => setselectedImg(`img2`)}
            />
          </div>
          <div className="mainImg">
            <img
              src={data?.attributes[selectedImg]?.data?.attributes?.url}
              alt=""
              className="w-full cursor-pointer md:h-full  h- rounded-md"
            />
          </div>
        </div>
        <div className="right">
          <h1>{data?.attributes?.title}</h1>
          <span className="price">{data?.attributes?.newprice}</span>
          <p>{data?.attributes?.desc}</p>
          <div className="quantity">
            <button className="bg-[var(--light-foreground)] font-bold rounded-md" onClick={() => setquantity((prev) => prev + 1)}>+</button>
            <h2>{quantity}</h2>
            <button className="bg-[var(--light-foreground)] font-bold rounded-md"
              onClick={() => setquantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
          </div>

          <button className="add" onClick={handleClick}>
            <AddShoppingCartIcon />
          </button>
          <div className="link">
            <div className="item">
              <FavoriteBorderIcon />
              Add To Wish List
            </div>
            <div className="item">
              <BalanceIcon />
              Add To COMPARE
            </div>
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
      <div
        className={`w-full absolute top-36 flex items-center justify-center ${
          loading ? "flex" : "hidden"
        }`}
      >
        <ReactLoading type="balls" color="black" className="size-44" />
      </div>
    </div>
  );
};

export default Product;
