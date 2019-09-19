import React from 'react';
import { Page, Paper, Heading } from './Page';
import pokedex from './images/pokedex.png'
import calculator from './images/calculator.png' 

export const Projects = props => {
    return(
        <Page>
            <Paper>
                <Heading>Pokedex</Heading>
                <img src={pokedex} alt="pokedex screen shot!"/>
                <p>Simple Pokedex application built with react and redux</p>
                <a href="https://pokedex.gettingonthe.net" target="__blank">View Pokedex!</a>
                <Heading>Calculator</Heading>
                <img src={calculator} alt="pokedex screen shot!"/>
                <p>Simple calculator application built with react</p>
                <a href="https://calculator.dev-aweso.me" target="__blank">View Calculator!</a>
            </Paper>
        </Page>
    )
}