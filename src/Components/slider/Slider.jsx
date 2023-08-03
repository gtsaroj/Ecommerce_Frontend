import React, { useState } from 'react';
import './Slider.scss';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Slider = () => {

    const data = [
        
        "https://www.angelxp.eu/image/Twitter/nature/plage03.jpg",
        "https://www.angelxp.eu/image/Twitter/nature/plage02.jpg",
        "https://marketplace.canva.com/EAFK_XV_Ht8/1/0/1600w/canva-black-typographic-retro-moon-and-astronaut-twitter-header-0NTqoXhUtsE.jpg",
    ]

    const[currentSlide, setcurrentSlide] = useState(0);

    function prevSlide(){
      setcurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev-1);
      console.log(setcurrentSlide)
    }
    function nextSlide(){
      setcurrentSlide(currentSlide === 2 ? 0 : (next)=>next+1);
      console.log(setcurrentSlide)
    }
    
    return (
    <div className="slider">
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
<img className="imageSrc" src={data[0]} alt="" />
<img className="imageSrc" src={data[1]} alt="" />
<img className="imageSrc" src={data[2]} alt="" />
      </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <KeyboardArrowLeftIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <KeyboardArrowRightIcon/>
                
            </div>
              </div>
        </div>
  )
}

export default Slider
