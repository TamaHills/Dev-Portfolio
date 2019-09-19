import React from 'react';
import { Page, Paper, Heading } from './Page';

export const About = props => (
    <Page>
        <Paper>
            <Heading>About:</Heading>
            <p>
                Full Stack Developer form Dallas, TX. 
            </p>
            <Heading>Skills:</Heading>
            <ul>
                <li>JavaScript/TypeScript</li>
                <li>React/Redux</li>
                <li>NodeJS/Express</li>
                <li>Python</li>
                <li>Go</li>
            </ul>
        </Paper>
    </Page>
)