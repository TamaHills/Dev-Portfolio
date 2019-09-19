import React from 'react'
import styled, { keyframes } from 'styled-components';

const mapper = item => {
    const Component = Components[item.component];
    return item.children || item.content ? (
        <>
            <Component>
                {item.content}
                {item.children && item.children.map(mapper)}
            </Component>
        </>
    ) : (<Component />)
}


export const RenderPage = ({ page }) => (
    <Page>
        <Paper>
            {page.map(mapper)}
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
    min-height: 80%;
    padding: 60px;
    -webkit-box-shadow: 0px 0px 42px 1px rgba(0,0,0,0.36);
    -moz-box-shadow: 0px 0px 42px 1px rgba(0,0,0,0.36);
    box-shadow: 0px 0px 42px 1px rgba(0,0,0,0.36);
    animation-name: ${slideIn};
    animation-duration: 500ms;
    animation-timing-function: ease-in;
    img {
        max-width: 30%;
    }
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

const Components = { ListItem, List, Divider, Paper, Page, Heading, Paragraph };