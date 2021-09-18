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
  Mui,
  Firebase,
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
  const toolsSvgs = [Npm, Github, Vscode, Mui, Firebase];
  const techList = svgListItems(techSvgs);
  const toolsList = svgListItems(toolsSvgs);
  return (
    <FadeAnimation>
      <div className={`${props.className} ${classes.skills}`}>
        <h2> Here is what i do.. </h2>
        <p>
          Focused on frontend technologies. Javascript, together with HTML and
          CSS. A big fan of React.js as a framework, including the latest
          features like Hooks and Redux. Additionally,I have experienced with
          the basics of several backend technologies. With an understanding of
          client/server communication.
        </p>
        <h3>Frontend technologies i practice</h3>
        <ul>{techList}</ul>
        <h3>Some tools i use</h3>
        <ul>{toolsList}</ul>
      </div>
    </FadeAnimation>
  );
};

export default Skills;
