import styled, { keyframes, css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const ToTheRight = keyframes`
    from {
        left: 0;
    }
    to {
        left: 50%;
    }
`

const ToTheLeft = keyframes`
    from {
        left: 50%;
    }
    to {
       left: 0;
    }
`

const SlideClosed = keyframes`
    from {
        width: 30vw;
        left: 0;
    }
    to {
        left: 0;
    }
`

const SlideClosedCompact = keyframes`
    from {
        width: 80vw;
        left: 0;
    }
    to {
        left: 0;
    }
`

const SlideOpen = keyframes`
    from {
        width: 40px;
        left: 0;
    }
    to {
       left: 0;
    }
`

const fade = keyframes`
    from {
        opacity: 0;
    }
    to {
       opacity: 1;
    }
`

const animation = props => css`
    animation-name: ${props.right ? ToTheRight : ToTheLeft};
    left: ${props.left ? 0 : 'unset'};
    right: ${props.right ? 0 : 'unset'};
`

const slideAnimation = props => css`
    animation-name: ${props.open ? SlideOpen : SlideClosed};
    @media (max-width: 800px) {
        animation-name: ${props.open ? SlideOpen : SlideClosedCompact};
    }
`

export const SideBarDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 100vh;
    background: whitesmoke;
    border-right: 1px solid #e4b8ff;
    ${props => props.open && `
        width: 30vw;
    `}
    ${slideAnimation}
    animation-duration: 500ms;
    @media (max-width: 800px) {
        position: fixed;
        ${props => props.open && `
        width: 80vw;
    `}
    }
    *{
        animation-name: ${fade};
        animation-duration: 750ms;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
`

export const StyledNavLink = styled(NavLink)`
    width: 100%;
    text-align: center;
    color: black;
    text-decoration: none;
    z-index: 2;
`

export const Nav = styled.div`
    position: absolute;
    bottom: 40px;
    height: 30px;
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    &:after {
        z-index: 0;
        content: '';
        position: absolute;
        height: 100%;
        width: 50%;
        border-bottom: 1px dotted #e4b8ff;
        ${animation}
        animation-duration: 500ms;   
    }
    @media (pointer:none), (pointer:coarse) {
        bottom: 80px;
    }      
`

export const OpenToggle = styled.button`
    position: absolute;
    height: 25px;
    width: 25px;
    color: #e4b8ff;
    border: 1px solid #e4b8ff;
    border-radius: 100%;
    top: 5px;
    right: 5px;
    text-align: center;
    padding: 0;
    padding-top: 3px;
    margin: 0;
    font-family: 'Turret Road', cursive;
    background: none;
    transition: ease 500ms;
    cursor: pointer;
    &:hover {
        color: whitesmoke;
        background: #e4b8ff;
    }
    &:focus {
        outline: none;
    }
`