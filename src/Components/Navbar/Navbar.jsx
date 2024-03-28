import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Menu from "../Menu/Menu";
import {
  UserCircleIcon,
  FacebookIcon,
  Github,
  Heart,
  LinkedinIcon,
  MenuIcon,
  Search,
  TwitchIcon,
  ChevronDown,
  X,
  frown,
  Smile,
  Frown,
} from "lucide-react";
import NepalImage from "../photos/flag.png";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import ProductSearch from "./ProductSearch";
import AuthProfile from "./AuthProfile";

export const AuthNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center lg:gap-x-64 2xl::justify-center justify-between xl:px-10 px-7 w-full">
      <div className="md:flex hidden items-center justify-center gap-1 text-sm">
        <div className="  flex items-center justify-center gap-[5px]">
          <p>Nepal status (NPR Rs)</p>
        </div>
        |
        <div className="flex items-center justify-center gap-[5px]">
          <img src={NepalImage} alt="" className="size-5" />
          <p>English (Us)</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <h1 className="text-3xl text-[var(--primary-color)] flex items-center justify-center gap-[2px]">
          X <span className="text-[var(--notification-color)]">MATO</span>
        </h1>
      </div>
      <div className="flex gap-[9px] items-center justify-center">
        <a href="#">
          <TwitchIcon />
        </a>
        <a href="#">
          <LinkedinIcon />
        </a>
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <Github />
        </a>
      </div>
    </div>
  );
};

const Navbar = () => {
  const NavbarUri = [
    {
      name: "Man",
      URL: "/man",
    },
    {
      name: "Women",
      URL: "/women",
    },
    {
      name: "New Arrival",
      URL: "/new arrival",
    },
  ];
  const { data } = useFetch("/products?populate=*");
  const [filterProduct, setFilteredProduct] = useState();
  const [storeFilteredData, setStoreFilteredData] = useState();
  const [openCart, setOpenCart] = useState();

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const filteringProduct = data?.filter((singleProduct) =>
      singleProduct.attributes.title
        ?.toLowerCase()
        .includes(filterProduct?.toLowerCase())
    );

    setStoreFilteredData(filteringProduct);
  }, [data, filterProduct]);

  const user = useSelector((state) => state.root.auth.userInfo);

  return (
    <div className="  flex flex-col items-center bg-[var(--light-text)] justify-center gap-2 sticky z-[10] top-[0px] shadow-md py-2">
      <AuthNavbar />
      <div className="flex relative items-center justify-between sm:px-12 px-1 2xl:justify-center w-full">
        <div className="flex md:hidden items-center gap-5">
          <button className="" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <MenuIcon />}
          </button>
          <div
            className={` duration-200 w-[200px] gap-12 items-center bg-[var(--dark-text)] text-[var(--light-text)] top-10 h-screen z-10 absolute flex flex-col  ${
              menu ? "left-[0]" : "left-[-1000px]"
            }`}
          >
            <h2>X MATO</h2>
            <div className="flex flex-col items-baseline justify-center gap-10">
              {NavbarUri?.map((singleProduct) => (
                <div className="cursor-pointer text-[20px]">
                  {singleProduct.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div
          className={` sm:flex hidden  sm:w-[230px] w-[200px] sm:px-5 px-3 ${
            open
              ? ""
              : " bg-[white] border-[1px] rounded-full border-[var(--dark-secondary-text)]"
          }  flex flex-row-reverse items-center justify-center `}
        >
          <input
            type="search"
            placeholder="Search Product"
            onChange={(event) => setFilteredProduct(event.target.value)}
            className={`text-sm w-full py-1 sm:py-2 px-5 outline-none rounded-tr-full rounded-br-full ${
              open ? "hidden" : ""
            } `}
          />

          <Search
            onClick={() => setOpen(!open)}
            color="black"
            className={`cursor-pointer `}
          />
        </div> */}
        <div className="hidden items-center gap-5 md:flex">
          {NavbarUri?.map((singleProduct, index) => (
            <div className="flex flex-col items-baseline group/navbar justify-center">
              <div
                className="cursor-pointer font-[400] text-[20px]"
                key={index}
                onClick={() => navigate(`/products${singleProduct.URL}`)}
              >
                {singleProduct.name}
              </div>
              <div className="group-hover/navbar:visible invisible   w-1/2 h-[2px] bg-[var(--primary-color)]"></div>
            </div>
          ))}
        </div>
        <div className="  flex items-center justify-center gap-3">
        <div
          className={` sm:px-5 px-3 ${
            open
              ? ""
              : " bg-[white] border-[1px] rounded-full border-[var(--dark-secondary-text)]"
          }  flex flex-row-reverse items-center justify-center `}
        >
            <div className="absolute left-2 right-2 top-14 px-2">
            <input
            type="search"
            placeholder="Search Product"
            onChange={(event) => setFilteredProduct(event.target.value)}
            className={`  text-sm w-full py-2 sm:py-2 px-5 outline-none rounded-md ${
              open ? "hidden" : ""
            } `}
          />
</div>

          <Search
            onClick={() => setOpen(!open)}
            color="black"
            className={`cursor-pointer `}
          />
        </div>
          <button onClick={() => setOpenCart(!openCart)}>
            {" "}
            <LocalMallIcon />
          </button>

          <button>
            <Heart />
          </button>
          {user?.avatar ? (
            <div className="flex flex-row-reverse items-center justify-center gap-1">
              <div
                onClick={() => setOpenProfile(!openProfile)}
                className=" cursor-pointer hover:bg-[#8080807c] rounded-full p-1 "
              >
                <ChevronDown className="size-6" />
              </div>
              <div className=" hover:bg-[#8080807c] p-2 rounded-full cursor-pointer group/user">
                <img
                  className=" size-7 rounded-full"
                  src={user?.avatar}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div
              className=" relative flex flex-col hover:text-[var(--secondary-color)] cursor-pointer"
              onClick={() => setOpenProfile(!openProfile)}
            >
              <UserCircleIcon
                className=" transition-colors duration-500 ease-in-out flex cursor-pointer shrink-0"
                size={30}
              />
              <ChevronDown className=" absolute size-4 bottom-2 right-1 text-[blue]" />
            </div>
          )}
        </div>
        <div
          className={` px-6  top-24 absolute left-0 right-0 w-full flex justify-center items-center ${
            open ? "hidden" : ""
          }`}
        >
          <div className=" w-[700px] overflow-y-auto flex flex-col items-stretch justify-start py-5 gap-5   h-[400px] bg-[white]   rounded-md">
            {filterProduct?.length <= 0 ? (
              <div className="flex flex-col items-center gap-2 justify-center">
                <Smile color="#133955" className="size-20" />
               Find Your Product
              </div>
            ) : storeFilteredData <= 0 ? (
              <div className="flex flex-col items-center gap-2 justify-center">
              <Frown color="#133955" className="size-20"/>
             Your Product Not Found
              
           </div>
            ) : (
              storeFilteredData?.map((singlProduct) => (
                <ProductSearch
                  singlProduct={singlProduct}
                  key={singlProduct.id}
                />
              ))
            )}
          </div>
        </div>
        <div
          className={`absolute top-[-25px] right-0 ${
            openCart ? "flex justify-center items-center" : "hidden"
          }`}
        >
          <Cart />
        </div>
        <div
          className={`absolute right-5 top-16 ${
            openProfile ? "flex" : "hidden"
          }`}
        >
          <AuthProfile user={user} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
