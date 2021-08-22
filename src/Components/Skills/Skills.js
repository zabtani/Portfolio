import classes from './Skills.module.css';
import FadeAnimation from '../Animations/FadeAnimation';
import {
  Github,
  Reactjs,
  Html,
  Js,
  Npm,
  Vscode,
  Css,
  MuiSVG,
} from '../../Components';
import React from 'react';
const Skills = (props) => {
  const svgListItems = (svgs) => {
    return svgs.map((Svg, idx) => {
      return (
        <li key={idx}>
          <Svg />
        </li>
      );
    });
  };
  const techSvgs = [Js, Css, Reactjs, Html];
  const toolsSvgs = [Npm, Github, Vscode, MuiSVG];
  const techList = svgListItems(techSvgs);
  const toolsList = svgListItems(toolsSvgs);
  return (
    <FadeAnimation>
      <div className={`${props.className} ${classes.skills}`}>
        <h2> here is what i do.. </h2>
        <p>
          Good understanding of javascript, html and css. with working
          experience on React.js as a framework. basic understanding of server
          side and how things work with node.js, mongoDb and also PHP.
        </p>
        <h3>front end technologies i practice</h3>
        <ul>{techList}</ul>
        <h3>some tools i use</h3>
        <ul>{toolsList}</ul>
      </div>
    </FadeAnimation>
  );
};

export default Skills;
