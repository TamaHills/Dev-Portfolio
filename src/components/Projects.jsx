import React from 'react';
import { RenderPageXML } from './Page';
import projectsPage from '../content/projects.xml';

export const Projects = () => (<RenderPageXML xml={projectsPage}/>)