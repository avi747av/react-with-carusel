import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Container = styled.div`
    width: 100vw;
    height: 15vh;
    background-color: black;
    display: flex;
    align-items: center;
`

const LinksContainer = styled.div`
    width: 30vw;
    margin: 0 auto;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
`

const StyledLink = styled(Link)`
    color: #FFFFFF;
`



const Nav = () => {
    return (
        <Container>
            <LinksContainer>
                <StyledLink to = "/">Home</StyledLink>
                <StyledLink to = "/Carusel">Caeusel</StyledLink>
            </LinksContainer>
        </Container>
    )
}

export default Nav