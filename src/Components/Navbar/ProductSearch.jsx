import React from "react";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const ProductSearch = ({ singlProduct }) => {
  const dispatch = useDispatch()
  return (
    <div
      key={singlProduct.id}
      className="flex items-center justify-between px-16"
    >
      <img
        className="size-9 rounded-md"
        src={singlProduct?.attributes.img.data.attributes.url}
        alt=""
      />
      <h1 className="text-[17px] text-[var(--dark-secondary-color)]">
        {" "}
        {singlProduct.attributes.title}
      </h1>
      <button onClick={() => dispatch(addToCart({
        id: singlProduct.id,
        title: singlProduct.attributes.title,
        Img: singlProduct?.attributes.img.data.attributes.url,
        desc: singlProduct.attributes.desc,
        newPrice: singlProduct.attributes.newprice,
        quantity : 1
       
        
      }))} className="px-7 py-1 bg-[var(--secondary-color)]">
        <ShoppingCart />
      </button>
    </div>
  );
};

export default ProductSearch;
