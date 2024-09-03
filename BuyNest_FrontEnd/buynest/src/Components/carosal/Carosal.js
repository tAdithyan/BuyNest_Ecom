import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';

// Import your images
import offer1 from '../../Accets/offer1.jpeg';
import offer2 from '../../Accets/offer2.jpeg';
import offer3 from '../../Accets/offer3.jpeg';

const CarouselWrapper = styled.div`
  margin: 3px auto;
  padding: 0;
  max-width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Slide = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const SlideImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        <Slide>
          <SlideImage src={offer1} alt="Offer 1" />
        </Slide>
        <Slide>
          <SlideImage src={offer2} alt="Offer 2" />
        </Slide>
        <Slide>
          <SlideImage src={offer3} alt="Offer 3" />
        </Slide>
        <Slide>
          <SlideImage src="https://via.placeholder.com/300x200.png?text=Offer+4" alt="Offer 4" />
        </Slide>
        <Slide>
          <SlideImage src="https://via.placeholder.com/300x200.png?text=Offer+5" alt="Offer 5" />
        </Slide>
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
