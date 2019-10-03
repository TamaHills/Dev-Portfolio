import React from 'react';
import { Link } from './Styles'
import { SideBarDiv, OpenToggle, Description, Nav, StyledNavLink} from './SidebarStyles'


const { useState, useEffect } = React;

export const SideBar = props => {
    const [ sideBarOpen, setSideBarOpen ] = useState(window.innerWidth > 800);

    useEffect(()=>{
        const handleResize = () => {
            setSideBarOpen(window.innerWidth > 800);
        } 
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <SideBarDiv open={sideBarOpen}>
            <OpenToggle onClick={() => setSideBarOpen(!sideBarOpen)}>{sideBarOpen ? 'X' : '>'}</OpenToggle>
            <Description>
                <h1>Matt M</h1>
                <sub>Full Stack Web Developer</sub>
                <Link href="https://github.com/TamaHills" target="__blank">github</Link>
            </Description>
            <Nav {...props.location.pathname === '/projects' ? {right: true, left: false} : {right: false, left: true}}>
                <StyledNavLink to="/">
                    About
                </StyledNavLink>
                <StyledNavLink to="/projects">
                    Projects
                </StyledNavLink>
            </Nav>
        </SideBarDiv>
        
    )
}