import styled from 'styled-components';

export const Page = styled.section`
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100vh;
    width: 70%;
`

export const Heading = styled.h2`
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 15px;
`

export const Paper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px;
    background: white;
    border-radius: 30px;
    width: 90%;
    background: white;
    min-height: 80%;
    padding: 60px;
    -webkit-box-shadow: 0px 0px 42px 1px rgba(0,0,0,0.36);
    -moz-box-shadow: 0px 0px 42px 1px rgba(0,0,0,0.36);
    box-shadow: 0px 0px 42px 1px rgba(0,0,0,0.36);
    img {
        max-width: 30%;
    }
    a {
        text-decoration: none;
        font-style: italic;
        font-weight: 100;
        color: black;
        &:hover{
            text-decoration: underline;
        }
    }
    * {
        margin: 10px 0;
    }
`