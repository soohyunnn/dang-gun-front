import React, { useEffect } from "react";
import Slider from "react-slick";
import { selectOneImageAPI } from "../../axios";
import { useSelector, useDispatch } from "react-redux";
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
  console.log("id", id);
  localStorage.setItem("id", id);
  const localId = localStorage.getItem("id");
  console.log("localId", localId);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { post, images } = useSelector((state) => ({
    post: state.postInputs.detailPost,
    images: state.postInputs.images,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    selectOneImageAPI(`/images/${id}`, post.id).then((response) => {
      //console.log("selectOneImageAPI-Res", response.data);
      dispatch(saveimage(response.data));
    });
  }, [id]);

  return (
    <ItemSlider>
      <div>
        <Slider {...settings}>
          {images.map((image) => (
            <div>
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
