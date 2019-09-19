import React from 'react';
import { Page, Paper, Heading, Divider } from './Page';
import { Link } from './Styles';
import pokedex from './images/pokedex.png'
import calculator from './images/calculator.png' 

export const Projects = props => {
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
}