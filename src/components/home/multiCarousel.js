import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { Button } from 'react-bootstrap';

const multiCarousel = () => {
  return (
    <div>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={0.1}
        sideSize={0.3}
        slidesToScroll={1}
        slidesToShow={3}
        scrollOnDevice={true}
      >
        <div className="multiSlider_Card">
          <img
            className="d-block w-100 multiSlideImg"
            src="./images/multiSlider/multi_slider1.jpg"
            alt="First multi slide"
          />
          <Button className="multiSlider_Button" variant="dark">
            View Style
          </Button>
        </div>
        <div className="multiSlider_Card">
          <img
            className="d-block w-100 multiSlideImg"
            src="./images/multiSlider/multi_slider2.jpg"
            alt="Second multi slide"
          />
          <Button className="multiSlider_Button" variant="dark">
            View Style
          </Button>
        </div>
        <div className="multiSlider_Card">
          <img
            className="d-block w-100 multiSlideImg"
            src="./images/multiSlider/multi_slider3.jpg"
            alt="Third multi slide"
          />
          <Button className="multiSlider_Button" variant="dark">
            View Style
          </Button>
        </div>
        <div className="multiSlider_Card">
          <img
            className="d-block w-100 multiSlideImg"
            src="./images/multiSlider/multi_slider4.jpg"
            alt="Fourth multi slide"
          />
          <Button className="multiSlider_Button" variant="dark">
            View Style
          </Button>
        </div>
        <div className="multiSlider_Card">
          <img
            className="d-block w-100 multiSlideImg"
            src="./images/multiSlider/multi_slider5.jpg"
            alt="Fifth multi slide"
          />
          <Button className="multiSlider_Button" variant="dark">
            View Style
          </Button>
        </div>
        <div className="multiSlider_Card">
          <img
            className="d-block w-100 multiSlideImg"
            src="./images/multiSlider/multi_slider6.jpg"
            alt="Sixth multi slide"
          />
          <Button className="multiSlider_Button" variant="dark">
            View Style
          </Button>
        </div>
        <div className="multiSlider_Card">
          <img
            className="d-block w-100 multiSlideImg"
            src="./images/multiSlider/multi_slider7.jpg"
            alt="Seventh multi slide"
          />
          <Button className="multiSlider_Button" variant="dark">
            View Style
          </Button>
        </div>
        <div className="multiSlider_Card">
          <img
            className="d-block w-100 multiSlideImg"
            src="./images/multiSlider/multi_slider8.jpg"
            alt="Eight multi slide"
          />
          <Button className="multiSlider_Button" variant="dark">
            View Style
          </Button>
        </div>
      </InfiniteCarousel>
    </div>
  );
};

export default multiCarousel;
