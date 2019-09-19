import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Link } from './Styles';

var ID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const Mapper = ({item})=> {
    const Component = Components[item.component];
    return item.children || item.content ? (
        <>
            <Component {...item.props}>
                {item.content}
                {item.children && item.children.map(child => (<Mapper key={ID()} item={child} />))}
            </Component>
        </>
    ) : (<Component key={ID()} {...item.props} />)
}


export const RenderPage = ({ page }) => (
    <Page>
        <Paper>
            {page.map(child => (<Mapper key={ID()} item={child} />))}
        </Paper>
    </Page>
)


const slideIn = keyframes`
    from {
        margin-top: 100%;
    }
    to {
        margin-top: 60px;
    }
`

export const Page = styled.section`
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100vh;
    width: 100%;
    @media (max-width: 800px) {
        margin-left: 40px;
    }
`

export const Heading = styled.h2`
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 15px;
`

export const Paper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    background: white;
    border-radius: 30px;
    width: 90%;
    background: white;
    min-height: 90%;
    padding: 60px;
    -webkit-box-shadow: 0px 0px 42px 1px rgba(0,0,0,0.36);
    -moz-box-shadow: 0px 0px 42px 1px rgba(0,0,0,0.36);
    box-shadow: 0px 0px 42px 1px rgba(0,0,0,0.36);
    animation-name: ${slideIn};
    animation-duration: 500ms;
    animation-timing-function: ease-in;
    * {
        margin: 10px 0;
    }
`
export const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    height: 5px;
`

export const List = styled.ul`

`

export const ListItem = styled.li`

`

export const Paragraph = styled.p`

`

export const Image = styled.img`
    max-width: 350px;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    width: 100%;
    border-bottom: 1px solid black;
`

const Components = { ListItem, List, Divider, Paper, Page, Heading, Paragraph, Link, Image, Section };