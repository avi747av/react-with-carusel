import React from 'react'
import styled from 'styled-components'

import Modal from '../Components/Modal'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

const ModalContainer = styled.div`
    width: fit-content;
    margin: 30vh auto;
`

const Home = () => {
    return (
        <Container>
            <ModalContainer>
                <h2>CLick on the image to open the modal</h2>
                <Modal name = "img1" />
            </ModalContainer>
        </Container>
    )
}

export default Home