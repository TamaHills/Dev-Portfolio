import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, colors } from "./Styles";
import { black } from "ansi-colors";
import { getImage } from "../content/utils/imageLoader";

const mime = "application/xml";

var ID = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

const newError = error => {
  return `
	<Paper>
		<Heading>oops something went wrong</Heading>
	</Paper>
	`;
};

const MapperDOM = ({ node }) => {
  let { nodeName, childNodes, data, attributes } = node;
  let props = {};
  if (attributes) {
    props = [...attributes].reduce(
      (acc, attr) => ({ ...acc, [attr.name]: attr.value }),
      {}
    );
  }
  if (props.src) props.src = getImage(props.src);
  if (nodeName === "#text") return <>{data}</>;
  let Component = Components[nodeName];
  return childNodes.length > 0 ? (
    <Component {...props}>
      {[...childNodes].map(childNode => (
        <MapperDOM key={ID()} node={childNode} />
      ))}
    </Component>
  ) : (
    <Component {...props} />
  );
};


export const RenderPageXML = ({ xml }) => {
  const parser = new DOMParser();
  const [DOM, setDOM] = useState(
    parser.parseFromString("<Page></Page>", mime)
  );

  useEffect(() => {
		const parser = new DOMParser();
    fetch(xml)
      .then(({ body }) => body.getReader().read())
      .then(({ value }) =>
        value.reduce((acc, char) => `${acc}${String.fromCharCode(char)}`, "")
      )
      .then(xml => setDOM(parser.parseFromString(`<Page>${xml}</Page>`, mime)))
      .catch(err => setDOM(parser.parseFromString(newError(err), mime)));
  }, [xml]);
  return (
    <>
      {[...DOM.childNodes].map(node => (
        <MapperDOM key={ID()} node={node} />
      ))}
    </>
  );
};

const slideIn = keyframes`
    from {
        margin-top: 100%;
    }
    to {
        margin-top: 60px;
    }
`;

export const Page = styled.section`
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100vh;
  width: 100%;
`;

export const Heading = styled.h2`
  width: 100%;
  border-bottom: 1px solid ${colors[black]};
  padding-bottom: 15px;
`;

export const Paper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  background: white;
  border-radius: 5px;
  width: 95%;
  background: white;
  min-height: calc(100vh - 60px);
  padding: 40px;
  animation-name: ${slideIn};
  animation-duration: 450ms;
  animation-timing-function: ease-in;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.32);
  * {
    margin: 10px 0;
  }
  @media (max-width: 800px) {
    margin-left: 60px;
    width: calc(100vw - 80px);
  }
`;
export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors[black]};
  height: 5px;
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Paragraph = styled.p``;

export const Image = styled.img`
  max-width: 350px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  width: 100%;
  border-bottom: 1px solid ${colors[black]};
`;

export const Loader = styled.div`
	width: 100%;
	height: 100vh;
`

const Components = {
  ListItem,
  List,
  Divider,
  Paper,
  Page,
  Heading,
  Paragraph,
  Link,
  Image,
  Section
};
