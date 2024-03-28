import React from "react";
import { Link } from "react-router-dom";
import {
  MailIcon,
  Facebook,
  SquareUserRound,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="text-[var(--light-text)] py-5 flex flex-col items-center justify-center gap-5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--dark-text)]">
      <div>
        <h1 className="text-4xl text-[var(--primary-color)] flex items-center justify-center gap-[2px]">
          X <span className="text-[var(--notification-color)]">MATO</span>
        </h1>
      </div>
      <div className="flex flex-wrap lg:px-10 px-5  justify-start items-center sm:justify-evenly gap-10 xl:gap-30 text-[var(--light-text)] border-b-[1px] w-full py-5 border-[var(light-text)]">
        <div className="flex flex-col items-baseline justify-center">
          <h3 className="font-semibold">Categories</h3>
          <div className="flex flex-col items-baseline justify-center">
            <span>
              {" "}
              <Link to="/products/:id" className="text-[var(--light-text)]">
                products
              </Link>
            </span>
            <span>
              <Link to="/products/:id" className="text-[var(--light-text)]">
                Men
              </Link>
            </span>
            <span>
              <Link to="/products/:id" className="text-[var(--light-text)]">
                Shoes
              </Link>
            </span>
            <span>
              <Link to="/products/:id" className="text-[var(--light-text)]">
                New{" "}
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-baseline justify-center">
          <h3 className="font-semibold">Links</h3>
          <div className="flex flex-col items-baseline justify-center">
            <span>
              {" "}
              <Link to="/products/:id" className="text-[var(--light-text)]">
                {" "}
                products
              </Link>
            </span>
            <span>
              <Link to="/products/:id" className="text-[var(--light-text)]">
                Men
              </Link>
            </span>
            <span>
              <Link to="/products/:id" className="text-[var(--light-text)]">
                Shoes
              </Link>
            </span>
            <span>
              <Link to="/products/:id" className="text-[var(--light-text)]">
                Accesories
              </Link>
            </span>
            <span>
              <Link to="/products/:id" className="text-[var(--light-text)]">
                New{" "}
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-baseline justify-center">
          <h3 className="font-semibold">About us</h3>
          <div className="flex flex-col items-baseline justify-center w-[230px] ">
            <span className="text-[var(--light-text)]">
              Experience effortless online shopping excellence with XMato's
              innovative platform.{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-baseline justify-center">
          <h3 className="font-semibold">Contact</h3>
          <div className="flex  gap-2 flex-col items-baseline justify-center w-[200px]">
            <a
              className="flex items-center justify-center gap-2"
              href="mailto:sarojgt326@gmail.com"
            >
              <MailIcon /> sarojgt326@gmail.com
            </a>
            <div
              className="flex items-center justify-center gap-2"
              href="mailto:sarojgt326@gmail.com"
            >
              <SquareUserRound /> +977-9825506216
            </div>
            <form className="flex" action="">
              <input
                type="email"
                placeholder="Suscribe..."
                className=" w-[180px] text-[var(--dark-text)] py-1 px-2 outline-none rounded-tl-md rounded-bl-md "
              />
              <button className="rounded-tr-md rounded-br-md bg-[var(--secondary-color)] px-1">
                Suscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" flex sm:flex-row flex-col-reverse gap-3 justify-between items-center  px-4 sm:px-10 py-1  sm:py-2 w-full">
        <div className="left">Developed by Saroj GT</div>
        <div className="flex justify-center items-center gap-2">
          <a
            className=" rounded-full p-2 hover:bg-[var(--secondary-color)] bg-[var(--light-text)]"
            href="https://github.com/gtsaroj"
          >
            <Github className="size-5
 text-[var(--secondary-color)] hover:text-[var(--light-text)] duration-200" />
          </a>
          <a
            className=" rounded-full p-2 hover:bg-[var(--secondary-color)] bg-[var(--light-text)]"
            href="https://www.facebook.com/sssrxxj/"
          >
            <Facebook className=" size-5 text-[var(--secondary-color)] hover:text-[var(--light-text)] duration-200" />
          </a>
          <a
            className=" rounded-full p-2 hover:bg-[var(--secondary-color)] bg-[var(--light-text)]"
            href="https://www.linkedin.com/in/saroj-gt-06a411255/"
          >
            <Linkedin className=" size-5 text-[var(--secondary-color)] hover:text-[var(--light-text)] duration-200" />
          </a>
          <a
            className=" rounded-full p-2 hover:bg-[var(--secondary-color)] bg-[var(--light-text)]"
            href="https://www.instagram.com/saroj_gt"
          >
            <Instagram className=" size-5 text-[var(--secondary-color)] hover:text-[var(--light-text)] duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
