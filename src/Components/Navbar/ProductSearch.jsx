import React from "react";
import { ShoppingCart } from "lucide-react";

const ProductSearch = ({ singlProduct }) => {
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
      <button className="px-7 py-1 bg-[var(--secondary-color)]">
        <ShoppingCart />
      </button>
    </div>
  );
};

export default ProductSearch;
