import React from 'react';
import { RenderPage } from './Page';
import pokedex from './images/pokedex.png'
import calculator from './images/calculator.png' 

const projectsPage = [
    {
        component: "Heading",
        content: "Pokedex"
    },
    {
        component: "Image",
        props: {src: pokedex, alt: "pokedex app screenshot"}
    },
    {
        component: "Paragraph",
        content: "Simple Pokedex application built with react and redux"
    },
    {
        component: "Link",
        content: "View Pokedex!",
        props: {target: "__blank", href:"https://pokedex.gettingonthe.net"}
    },
    {
        component: "Divider"
    },
    {
        component: "Heading",
        content: "Calculator"
    },
    {
        component: "Image",
        props: {src: calculator, alt: "calculator app screenshot"}
    },
    {
        component: "Paragraph",
        content: "Simple calculator application built with react"
    },
    {
        component: "Link",
        content: "View Calculator!",
        props: {target: "__blank", href:"https://calculator.dev-aweso.me"}
    },
    {
        component: "Divider"
    }
]

export const Projects = props => (<RenderPage page={projectsPage}/>)

/* export const Projects = props => {
    return(
        <Page>
            <Paper>
                <Heading>Pokedex</Heading>
                <img src={pokedex} alt="pokedex screen shot!"/>
                <p>Simple Pokedex application built with react and redux</p>
                <Link href="https://pokedex.gettingonthe.net" target="__blank">View Pokedex!</Link>
                <Divider />
                <Heading>Calculator</Heading>
                <img src={calculator} alt="pokedex screen shot!"/>
                <p>Simple calculator application built with react</p>
                <Link href="https://calculator.dev-aweso.me" target="__blank">View Calculator!</Link>
                <Divider />
            </Paper>
        </Page>
    )
} */