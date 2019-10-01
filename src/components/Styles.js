import styled from 'styled-components';

export const colors = {
    black: "#0e1111"
}

export const Link = styled.a`
    font-size: 12px;
    margin: 10px 0;
    color: black;
    font-family: 'Zilla Slab', serif;
    text-decoration: none;
    padding: 7px 10px 7px;
    height: 30px;
    text-align: center;
    border: 1px solid #e4b8ff;
    border-radius: 3px;
    transition: ease 500ms;
    &:hover {
        background: #e4b8ff;
        color: whitesmoke;
    }
`