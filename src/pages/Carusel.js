import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Modal from '../Components/Modal'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 200vh;
`

const Div = styled.div`
    display: block;
    margin: 5vw auto;
    max-width: 80vw;
    max-height: 50vh;
`

const Try = () => {
    return (
        <Container>
            <Div>
                <Carousel
                    slidesPerScroll={2}
                    slidesPerPage={3}
                    infinite
                    arrows
                >
                <Modal name = "img1" />
                <Modal name = "img2" />
                <Modal name = "img3" />
                <Modal name = "img4" />
                <Modal name = "img5" />
                <Modal name = "img6" />
                <Modal name = "img1" />
                <Modal name = "img2" />
                <Modal name = "img3" />
                <Modal name = "img4" />
                <Modal name = "img5" />
                <Modal name = "img6" />
                   
                </Carousel>

            </Div>
        </Container>
    )
}

export default Try