import React from "react";
import "./home.scss";
import Slider from "../../Components/slider/Slider";
import FeaturedProducts from "../../Components/Features/FeaturedProducts";
import { ChevronRight } from "lucide-react";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const CategoryType = [
    {
      url: "/new arrivals",
      name: "New Arrivals",
    },
    {
      url: "/men",
      name: "Men",
    },
    {
      url: "/women",
      name: "Women",
    },
  ];
  const { data } = useFetch(`/categories`);
  const navigate = useNavigate();

  const handleChange = (categoryType) => {
    const filterCatory = data?.find(
      (category) => category.title === categoryType.name
    );

    if (!filterCatory) {
      throw Error("Category Not found");
    }
    console.log(categoryType.singleCategory);
    navigate(`/products${categoryType.singleCategory.url}`);
  };

  return (
    <div className="flex flex-col items-center gap-5 justify-center w-full sm:w-[350px] bg-white">
      <h1 className=" w-full py-5 bg-[var(--secondary-color)] text-[var(--light-text)] text-[18px] px-5  rounded-tr-md rounded-tl-md">
        CATEGORIES
      </h1>
      <div className="flex flex-col items-baseline justify-center gap-4 w-full pl-3">
        {CategoryType?.map((singleCategory) => (
          <button
            onClick={() => handleChange({ singleCategory })}
            className=" border-b-[1px] border-[var(--secondary-light-text)] w-full flex justify-start py-2 items-center gap-1 hover:gap-2 transition-all"
          >
            {singleCategory.name} <ChevronRight className="size-4" />
          </button>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Slider />
      <div className="flex flex-col-reverse  sm:flex-row-reverse justify-center w-full items-center px-5">
        <FeaturedProducts type="Featured Products" />
      </div>
      <FeaturedProducts type="Trending Proudcts" />
    </div>
  );
};

export default Home;
