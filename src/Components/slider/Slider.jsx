import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import image1 from "../photos/img_mountains_wide.jpg";
import image2 from "../photos/img_nature_wide.jpg";
import { clear } from "@testing-library/user-event/dist/clear";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const images1 = [
    "https://i.pinimg.com/originals/d4/a8/fa/d4a8faa6147ef48adf272d83e2eb279e.jpg",
    "https://adimanav.com/wp-content/uploads/2018/02/head-turner-graphic-tshirt-banner-60.jpg",
    "https://cdn.shopify.com/s/files/1/0249/4110/1152/collections/men_s_shirt.jpg",
  ];

  const [SliderContainer, setSliderContainer] = useState(images[0]);
  const [SliderContainer1, setSliderContainer1] = useState(images1[0]);
  const [sliderNumber, SetSliderNumber] = useState(0);
  const [sliderNumber1, SetSliderNumber1] = useState(0);

  const sliderChange = (index, event) => {
    event.preventDefault();
    const matchingsliderindex = images.find((singleimage, imageindex) =>
      imageindex === index ? singleimage : ""
    );
    if (matchingsliderindex) {
      return setSliderContainer(matchingsliderindex);
    }
  };
  const sliderChange1 = (index, event) => {
    event.preventDefault();
    const matchingsliderindex = images.find((singleimage, imageindex) =>
      imageindex === index ? singleimage : ""
    );
    if (matchingsliderindex) {
      return setSliderContainer(matchingsliderindex);
    }
  };

  useEffect(() => {
    const matchingsliderIndex = images.find((singleimage, imageindex) =>
      sliderNumber === imageindex ? singleimage : ""
    );

    setSliderContainer(matchingsliderIndex);

    const timer = setInterval(() => {
      SetSliderNumber((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 4000);
    const matchingsliderIndex1 = images1.find((singleimage, imageindex) =>
      sliderNumber1 === imageindex ? singleimage : ""
    );

    setSliderContainer1(matchingsliderIndex1);

    const timer1 = setInterval(() => {
      SetSliderNumber1((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(timer1);
    };
  }, [sliderNumber, images, images1, sliderNumber1]);

  useEffect(() => {}, [images1, sliderNumber1]);

  return (
    <div className="py-2 w-full flex  justify-center items-start">
      <div className="relative w-full flex flex-col items-center justify-center  px-1">
        <div className=" slide  transition-all duration-150  w-full sm:h-[450px] h-[200px]">
          <img
            className=" w-full h-full rounded-md "
            src={SliderContainer}
            alt=""
          />
        </div>
        <div className="absolute bottom-3 flex justify-center items-center gap-2 sm:gap-4">
          {images?.map((item, index) => (
            <button
              key={index}
              className={` ${
                index === sliderNumber
                  ? "border-[3px] border-bg[var(--dark-border)]  "
                  : ""
              } sm:w-5 sm:h-5 w-3 h-3 cursor-pointer rounded-full bg-[var(--dark-background)] duration-100  focus:border-[3px] focus:border-[var(--dark-border)]`}
              onClick={(event) => sliderChange(index, event)}
            ></button>
          ))}
        </div>
        <div className=" absolute   flex justify-between w-full sm:px-12 px-2 ">
          <button
            onClick={() =>
              SetSliderNumber((prev) => (prev <= 0 ? 2 : prev - 1))
            }
            className=" p-1  sm:p-2 rounded-full bg-[var(--dark-background)]"
          >
            <ArrowLeft className="text-[var(--light-text)] w-5 h-5 " />
          </button>
          <button className=" p-1  sm:p-2 rounded-full bg-[var(--dark-background)]">
            <ArrowRight
              className="text-[var(--light-text)] w-5 h-5 "
              onClick={() =>
                SetSliderNumber((prev) => (prev >= 2 ? 0 : prev + 1))
              }
            />
          </button>
        </div>
      </div>
      <div className="w-full flex-col hidden md:flex">
        <div className="relative w-full flex flex-col items-center justify-center  px-1">
          <div className=" slide  transition-all duration-150  w-full h-[280px] ">
            <img
              className=" w-full h-full rounded-md "
              src={SliderContainer1}
              alt=""
            />
          </div>
          <div className="absolute bottom-3 flex justify-center items-center gap-2 sm:gap-4">
            {images1?.map((item, index) => (
              <button
                key={index}
                className={` ${
                  index === sliderNumber1
                    ? "border-[3px] border-bg[var(--dark-border)]  "
                    : ""
                } sm:w-5 sm:h-5 w-3 h-3 cursor-pointer rounded-full bg-[var(--dark-background)] duration-100  focus:border-[3px] focus:border-[var(--dark-border)]`}
                onClick={(event) => sliderChange1(index, event)}
              ></button>
            ))}
          </div>
          <div className=" absolute   flex justify-between w-full sm:px-12 px-2 ">
            <button
              onClick={() =>
                SetSliderNumber1((prev) => (prev <= 0 ? 2 : prev - 1))
              }
              className=" p-1  sm:p-2 rounded-full bg-[var(--dark-background)]"
            >
              <ArrowLeft className="text-[var(--light-text)] w-5 h-5 " />
            </button>
            <button className=" p-1  sm:p-2 rounded-full bg-[var(--dark-background)]">
              <ArrowRight
                className="text-[var(--light-text)] w-5 h-5 "
                onClick={() =>
                  SetSliderNumber1((prev) => (prev >= 2 ? 0 : prev + 1))
                }
              />
            </button>
          </div>
        </div>
        <div className="w-full justify-center items-center flex">
          {" "}
          <div className="   transition-all duration-150  w-full h-[173px] px-1 py-1">
            <img className=" w-full h-full rounded-sm" src={image1} alt="" />
          </div>{" "}
          <div className="   transition-all duration-150  w-full h-[173px] px-1 py-1">
            <img className=" w-full h-full rounded-sm " src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
