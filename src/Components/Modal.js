import React, { useState } from 'react'
import styled from 'styled-components'

// Background Behind the modal
const Background =styled.div` 
    width:100vw;            
    z-index: 300;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity:    ${props => props.open ? "1" : "0"};
    visibility: ${props => props.open ? "visible" : "hidden"};
    transition: opacity 0.3s ease-out 0s, visibility 0.3s ease-out 0s;
    background-color: rgba(0, 0, 0, 0.3);
`

//Modal 
const Modal = styled.div`
    z-index: 400;
    position: fixed;
    bottom: 0px;
    transition: -webkit-transform 0.3s ease-out 0s;
    will-change: transform;
    overflow-y: auto;
    background: #D3D3D3;
    text-align: center;
    height: 50vw;
    max-height: 90vh;
    width: 80vw;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    right: 0px;
    transform: ${props => props.open ? "translate(-50% ,-50%)" : "translateY(0%)" };
    visibility: ${props => props.open ? "visible" : "hidden"};
    box-shadow:rgba(0, 0, 0 ,0.15) -2px 2px 4px;
    top: 50%;
    left: 50%;
    cursor: default;
    user-select: none;
    -ms-user-select: none;
`

// function to build the modal. the img is the "buttun" to open the modal
const ModalBuilder  = (props) => {
    const [modalShow, setModalShow] = useState(false) // change state for opening and closing the modal
    return (
        <div>
            <Background className = "background" onClick = { () => setModalShow(false) } open = {modalShow} />
            <img src = {require(`../static/images/${props.name}.png`)} width ="300" alt = "cat"  onClick = { () => setModalShow(true) } />
            <Modal className = "modal" open = { modalShow } />
        </div>
    )
}

export default ModalBuilder