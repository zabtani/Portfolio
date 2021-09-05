import classes from './Projects.module.css';
import {
  noterJPG,
  shopJPG,
  colorsGameJPG,
  ipcheckJPG,
  protfolioJPG,
} from '../../Components';

import Project from './Project';
import FadeAnimation from '../Animations/FadeAnimation';
const Projects = (props) => {
  const react = <b>React</b>;
  const plainJs = <b>Plain JavaScript</b>;
  const features = {
    crud: 'CRUD',
    context: 'React context usage',
    localStorage: 'localStorage data storing',
    mui: 'Material UI',
    hooks: 'React hooks',
    async: 'Asynchronous operations',
    apis: 'Third party APIs',
    jsClasses: 'Javascript classes & inheritance',
    dom: 'DOM manipulation',
    css: 'Vanilla CSS',
    mvc: 'MVC pattern',
    animations: 'Animations',
    mobile: 'mobile responsive design',
  };
  const projects = [
    {
      name: 'Noter App',
      description: (
        <span>
          Notes application built with {react}. allow to add dynamic labels and
          notes base on them. includes active/completed note list distribution,
          with a filter feature for each list.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/Noter/',
      sourceUrl: 'https://github.com/zabtani/Noter',
      img: noterJPG,
      techs: ['react', 'html', 'css'],
      /* prettier-ignore */
      features: [features.crud,features.context,features.localStorage,features.mui,features.mobile],
    },
    {
      name: 'IP check',
      description: (
        <span>
          Check IP address application built with {react}. gives information
          base on provided IP or base on client IP (when first entered).
          provides information of an IP like origin city and country,flag and
          location on a map. works with several API's like mapbox,
          ipgeolocation,cloudflare and unsplash.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/IP-check/',
      sourceUrl: 'https://github.com/zabtani/IP-check',
      img: ipcheckJPG,
      techs: ['react', 'html', 'css'],
      /* prettier-ignore */
      features: [features.hooks, features.async, features.apis,features.mobile],
    },
    {
      name: 'Protfolio',
      description: (
        <span>
          My web devloper protfolio you are using right now, built with {react}.
          this smart protfolio includes informative pages about my coding work
          like skills, resume and projects information. the contact page
          contains a form that send me an email with the applicant information
          (using emailJS API). the application collect data about the client
          like projects and pages he visited and send it together with the form
          to my personal email.
        </span>
      ),
      demoUrl: undefined,
      sourceUrl: 'https://github.com/zabtani/Protfolio',
      img: protfolioJPG,
      techs: ['react', 'html', 'css'],
      /* prettier-ignore */
      features: [features.context,features.apis,features.localStorage,features.mui,features.animations,features.mobile],
    },
    {
      name: 'Shop App',
      description: (
        <span>
          Shop application built with {plainJs}. this ecommerce website
          generates dynamic catigories like prices,discounts,geners and brands
          base on the data provided to the app. includes search bar,business
          information pages and cart features.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/shop/',
      sourceUrl: 'https://github.com/zabtani/shop',
      img: shopJPG,
      techs: ['javascript', 'html', 'css'],
      features: [
        features.jsClasses,
        features.dom,
        features.css,
        features.mobile,
      ],
    },
    {
      name: 'Colors game',
      description: (
        <span>
          Colors memory game built with {plainJs}. after name and optional
          colors to memorize has been chosen,game generates new level with some
          random colors snapshots for limited time. user should recall which
          color was where.levels get harder by adding more colors to recall.
          includes recoreds table.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/Colors-game/',
      sourceUrl: 'https://github.com/zabtani/Colors-game',
      img: colorsGameJPG,
      techs: ['javascript', 'html', 'css'],
      /* prettier-ignore */
      features: [features.mvc, features.jsClasses, features.dom, features.css,features.mobile],
    },
  ];

  return (
    <FadeAnimation>
      <div className={props.className}>
        <h2>My Projects</h2>
        <div className={classes.projectsContainer}>
          {projects.map((project, idx) => {
            return <Project key={`${project.name}${idx}`} {...project} />;
          })}
        </div>
      </div>
    </FadeAnimation>
  );
};

export default Projects;
