import React from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Modal from '../Components/Modal'

const Container = styled.div`
    display: block;
    margin: 20vw auto;
    width: 80vw;
    height: 100vh;
`

// build the carusel. 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <Container>
            <Slider {...settings}>
                <Modal classname = "my-modal" name = "img1" />
                <Modal classname = "my-modal" name = "img2" />
                <Modal classname = "my-modal" name = "img3" />
                <Modal classname = "my-modal" name = "img4" />
                <Modal classname = "my-modal" name = "img5" />
                <Modal classname = "my-modal" name = "img6" />
            </Slider>
        </Container>
    );
  }
}

export default SimpleSlider


