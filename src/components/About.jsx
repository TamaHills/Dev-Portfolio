import React from "react";
import { RenderPage } from "./Page";
import { page } from '../content/about.json'


export const About = props => <RenderPage page={page} />;

/* export const About = props => (
    <Page>
        <Paper>
            <Heading>About:</Heading>
            <p>
                Full Stack Developer from Dallas, TX. 
            </p>
            <Heading>Skills:</Heading>
            <List>
                <ListItem>JavaScript/TypeScript</ListItem>
                <ListItem>React/Redux</ListItem>
                <ListItem>NodeJS/Express</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>Go</ListItem>
            </List>
        </Paper>
    </Page>
) */
