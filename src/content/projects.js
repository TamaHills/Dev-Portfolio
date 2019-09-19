import pokedex from './images/pokedex.png';
import calculator from './images/calculator.png';
import nasa from './images/nasa.png';

export default [
    
    {
        component: "Section", 
        children: [{
            component: "Heading",
            content: "Pokedex"
        },
        {
            component: "Image",
            props: { src: pokedex, alt: "pokedex app screenshot" }
        },
        {
            component: "Paragraph",
            content: "Simple Pokedex application built with react and redux"
        },
        {
            component: "Link",
            content: "View Pokedex!",
            props: { target: "__blank", href: "https://pokedex.gettingonthe.net" }
        },
        ]
    },
    {
        component: "Section", 
        children: [{
            component: "Heading",
            content: "Calculator"
        },
        {
            component: "Image",
            props: { src: calculator, alt: "calculator app screenshot" }
        },
        {
            component: "Paragraph",
            content: "Simple calculator application built with react"
        },
        {
            component: "Link",
            content: "View Calculator!",
            props: { target: "__blank", href: "https://calculator.dev-aweso.me" }
        }
        ]
    },{
        component: "Section", 
        children: [{
            component: "Heading",
            content: "NASA APOD"
        },
        {
            component: "Image",
            props: { src: nasa, alt: "nasa app screenshot" }
        },
        {
            component: "Paragraph",
            content: "A Client for the NASA astronomy photo of the day API. Allows you to select a photo by date!"
        },
        {
            component: "Link",
            content: "View NASA APOD!",
            props: { target: "__blank", href: "https://nasa.mattdmasters.com/" }
        }
        ]
    },
]