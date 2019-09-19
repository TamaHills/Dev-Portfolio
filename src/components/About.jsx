import React from "react";
import { RenderPage } from "./Page";

const aboutPage = [
  { component: "Heading", content: "About" },
  { component: "Paragraph", content: "Full Stack Developer from Dallas, TX." },
  { component: "Heading", content: "Skills" },
  { component: "List", children:[
      {component: "ListItem", content: "JavaScript/TypeScript"},
      {component: "ListItem", content: "React/Redux"},
      {component: "ListItem", content: "NodeJS/Express"},
      {component: "ListItem", content: "Python"},
      {component: "ListItem", content: "Go"},
  ]}
];

export const About = props => <RenderPage page={aboutPage} />;

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
