import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { selectOneImageAPI } from "../../axios";
import { useDispatch } from "react-redux";
import { saveimage } from "../../modules/postInputs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import left from "../../img/icon-slider-left.svg";
import right from "../../img/icon-slider-right.svg";

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

  .slick-initialized .slick-slide {
    width: 729px !important;
  }

  .landscape {
    width: 100%;
    height: 500px;
  }
`;

function SlideContainer({ id }) {
  const [imageList, setImageList] = useState();
  if (id !== 0) {
    localStorage.id = id;
  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    selectOneImageAPI(`/images/${localStorage.id}`, localStorage.id).then(
      (response) => {
        dispatch(saveimage(response.data));
        setImageList(response.data);
      }
    );
  }, [dispatch]);

  return (
    <ItemSlider>
      <div>
        <Slider {...settings}>
          {imageList !== undefined &&
            imageList.map((image) => (
              <div key="image.id">
                <h3 className="hide">{image.id}</h3>
                <img
                  className="landscape"
                  alt={image.name}
                  src={image.path}
                ></img>
              </div>
            ))}
        </Slider>
      </div>
    </ItemSlider>
  );
}

export default SlideContainer;
