import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import left from "../../img/icon-slider-left.svg";
import right from "../../img/icon-slider-right.svg";
import img1 from "../../img/macbook.jpg";
import img2 from "../../img/macbook2.jpg";

const ItemSlider = styled.div`
  .slick-prev:before {
    position: absolute;
    left: -20px;
    color: currentColor;
    background: url(${left}) no-repeat;
  }

  .slick-next:before {
    position: absolute;
    left: 20px;
    color: currentColor;
    background: url(${right}) no-repeat;
  }
  
  .slick-slider {
    display: flex;
    justify-content: center;
  }

  .landscape{
      width: 100%;
      height: 500px;
  }
`;

function SlideContainer() {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <ItemSlider>
        <div>
          <Slider {...settings}>
            <div>
              <h3 className="hide">1</h3>
              <img class="landscape" alt="맥북 에어 2018 MacBook Air 2018 256기가 고급형의 사진 1" src={img1}></img>
            </div>
            <div>
              <h3 className="hide">2</h3>
              <img class="landscape" alt="맥북 에어 2018 MacBook Air 2018 256기가 고급형의 사진 1" src={img2}></img>
            </div>
            <div>
              <h3 className="hide">3</h3>
            </div>
            <div>
              <h3 className="hide">4</h3>
            </div>
            <div>
              <h3 className="hide">5</h3>
            </div>
            <div>
              <h3 className="hide">6</h3>
            </div>
          </Slider>
        </div>
        </ItemSlider>
      );
}

export default SlideContainer;