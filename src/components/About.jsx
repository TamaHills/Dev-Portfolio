import React from "react";
import { RenderPageXML } from "./Page";
import xml from "../content/about.xml";

export const About = () => <RenderPageXML xml={xml} />;
