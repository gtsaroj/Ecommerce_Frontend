import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.scss";
import useFetch from "../../Hooks/useFetch";
import Card from "../../Components/card/Card";
import { Filter, X } from "lucide-react";

const Products = () => {
  const param = useParams().tag;
  const [maxPrice, setmaxPrice] = useState(100000);
  const [Sort, setSort] = useState(null);
  const [categories, setCategories] = useState();
  const [selectedSubCats, setSelectedSubCats] = useState(categories);
  const [filtered, setFiltered] = useState(false);

  function handleChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    const filterProducts = categories?.filter((category) =>
      category?.attributes.subcategories?.data.find(
        (subcategory) => subcategory.attributes.title === value
      )
    );
    const exceptProduct = categories?.filter((category) =>
      category?.attributes.subcategories?.data.find(
        (subcategory) => subcategory.attributes.title !== value
      )
    );

    setSelectedSubCats((prev) => (isChecked ? filterProducts : ""));
  }

  const PriceChange = (value) => {
    setmaxPrice(value);
    const priceFilterProducts = categories?.filter(
      (singleItem) => singleItem?.attributes.newprice <= value
    );
    setSelectedSubCats(priceFilterProducts);
  };

  const { data, Loading, Error } = useFetch(`/api/products?populate=*`);

  const { data: subcategories } = useFetch("/api/subcategories?populate=*");

  useEffect(() => {
    const FilteringData = data?.filter(
      (product) => product.attributes.tag === param
    );
    setCategories(FilteringData);
  }, [param, data]);

  useEffect(() => {}, [categories]);

  const higherToLower = () => {
    const filterProducts = [...categories].sort(
      (a, b) => b.attributes.newprice - a.attributes.newprice
    );
    setSelectedSubCats(filterProducts);
  };
  const lowerToHigher = () => {
    const filterProducts = [...categories].sort(
      (a, b) => a.attributes.newprice - b.attributes.newprice
    );
    setSelectedSubCats(filterProducts);
  };
  console.log(selectedSubCats);

  return (
    <div className="flex md:flex-row flex-col gap-3  px-2 py-7">
      <div className=" relative  md:hidden flex justify-end ">
        <button
          className="flex flex-col md:hidden"
          onClick={() => setFiltered(!filtered)}
        >
          <Filter />
        </button>
        <div
          className={`left transition-all px-2 bg-[var(--secondary-dark-text)] sm:flex-col absolute h-screen  ${
            filtered ? "right-[-10px] z-[5]" : "right-[-300px]"
          }`}
        >
          <div className="filterItem">
            <div
              className="cursor-pointer flex justify-end"
              onClick={() => setFiltered(!filtered)}
            >
              {" "}
              <X />
            </div>
            <h3>Product Categories</h3>
            {subcategories?.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type={"checkbox"}
                  name="unique"
                  value={item.attributes.title}
                  onChange={handleChange}
                />
                <label id={item.title} htmlFor={item.id}>
                  {item.attributes.title}
                </label>
              </div>
            ))}
          </div>
          <div className="filterItem">
            <h3>Filter by Price</h3>
            <div className="inputItem py-2 rounded-sm gap-2 bg-slate-500 flex items-center justify-center ">
              <span>0</span>
              <input
                type="range"
                value={maxPrice}
                min={0}
                max={10000}
                onChange={(e) => PriceChange(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h3>Sort by</h3>
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                id="asc"
                value="1"
                name="price"
                onClick={() => lowerToHigher()}
              />
              <label htmlFor="asc">Price lowest to highest</label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                id="desc"
                value="1"
                name="price"
                onClick={() => higherToLower()}
              />
              <label htmlFor="asc">Price highest to lowest</label>
            </div>
          </div>
        </div>
      </div>
      <div className="left hidden md:flex sm:flex-col">
        <div className="filterItem">
          <h3>Product Categories</h3>
          {subcategories?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type={"checkbox"}
                name="unique"
                value={item.attributes.title}
                onChange={handleChange}
              />
              <label id={item.title} htmlFor={item.id}>
                {item.attributes.title}
              </label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h3>Filter by Price</h3>
          <div className="inputItem py-2 rounded-sm gap-2 bg-slate-500 flex items-center justify-center ">
            <span>0</span>
            <input
              type="range"
              value={maxPrice}
              min={0}
              max={10000}
              onChange={(e) => PriceChange(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h3>Sort by</h3>
          <div className="flex items-center justify-start gap-2">
            <input
              type="radio"
              id="asc"
              value="1"
              name="price"
              onClick={() => lowerToHigher()}
            />
            <label htmlFor="asc">Price lowest to highest</label>
          </div>
          <div className="flex items-center justify-start gap-2">
            <input
              type="radio"
              id="desc"
              value="1"
              name="price"
              onClick={() => higherToLower()}
            />
            <label htmlFor="asc">Price highest to lowest</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="cartImg" src={require("./bg.jpg")} alt=" " />

        <div className="flex justify-center items-center gap-3 flex-wrap">
          {selectedSubCats
            ? selectedSubCats?.map((item) => {
                return <Card props={item} key={item.id} />;
              })
            : categories?.map((item) => <Card props={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;
