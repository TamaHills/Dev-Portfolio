import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const SideBarDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 100vh;
    background: whitesmoke;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
`

const StyledLink = styled(NavLink)`
    width:100%;
    text-align: center;
    color: black;
    text-decoration: none;
    z-index: 2;
`

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

const animation = props => css`
    animation-name: ${props.right ? ToTheRight : ToTheLeft};
    left: ${props.left ? 0 : 'unset'};
    right: ${props.right ? 0 : 'unset'};
`

const Nav = styled.div`
    position: absolute;
    bottom: 20px;
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    &:after {
        z-index: 0;
        content: '';
        position: absolute;
        height: 100%;
        width: 50%;
        border-bottom: 1px solid black;
        ${animation}
        animation-duration: 500ms;   
    }
`

export const SideBar = props => {
    console.log(props)
    return (
        <SideBarDiv>
            <Description>
                <h1>Matt M</h1>
                <sub>Full Stack Web Developer</sub>
            </Description>
            <Nav {...props.location.pathname === '/projects' ? {right: true, left: false} : {right: false, left: true}}>
                <StyledLink to="/">
                    About
                </StyledLink>
                <StyledLink to="/projects">
                    Projects
                </StyledLink>
            </Nav>
        </SideBarDiv>
    )
}