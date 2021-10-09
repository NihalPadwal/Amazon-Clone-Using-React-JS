import React, { useState } from "react";
import { SliderData } from "./imageSliderData";
import "./sliderCss.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Imageslider = ({ slides }) => {
  const [current, setcurrent] = useState(0);
  const length = slides.length;
  
  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <ArrowBackIosOutlinedIcon
        className="left-arrow"
        fontSize="large"
        stroke={"black"}
        stroke-width={0.3}
        onClick={prevSlide}
      />

      <ArrowForwardIosOutlinedIcon
        className="right-arrow"
        fontSize="large"
        stroke={"black"}
        stroke-width={0.3}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="amazon" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Imageslider;
