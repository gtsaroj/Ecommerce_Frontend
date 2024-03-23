import React, { useState } from "react";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Menu from "../Menu/Menu";
import {
  CircleUser,
  FacebookIcon,
  Github,
  Heart,
  LinkedinIcon,
  MenuIcon,
  Search,
  TwitchIcon,
  X,
} from "lucide-react";
import NepalImage from "../photos/flag.png";
import { useNavigate } from "react-router-dom";

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
  const products = useSelector((state) => state.cart.products);

  const [open, setOpen] = useState(false);

  const [menu, setMenu] = useState(false);

  return (
    <div className="flex flex-col items-center bg-[var(--light-text)] justify-center gap-2 sticky z-[10] top-[0px] shadow-md py-2">
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
              <div className="text-xl">New Arrivals</div>
              <div className="text-xl">Man</div>
              <div className="text-xl">Women</div>
            </div>
          </div>
        </div>

        <div className=" sm:w-[230px] w-[200px] sm:px-5 px-3 flex bg-[white] flex-row-reverse items-center justify-center border-[1px] rounded-full border-[var(--dark-secondary-text)]">
          <input
            type="search"
            placeholder="Search Product"
            className=" text-sm w-full py-1 sm:py-2 px-5 outline-none rounded-tr-full rounded-br-full "
          />
          <Search color="black" className=" " />
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <div className="text-xl">New Arrivals</div>
          <div className="text-xl">Man</div>
          <div className="text-xl">Women</div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button>
            {" "}
            <LocalMallIcon />
          </button>
          <button>
            <Heart />
          </button>
          <button>
            <CircleUser />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
