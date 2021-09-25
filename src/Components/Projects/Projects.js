import classes from './Projects.module.css';
import {
  noterJPG,
  shopJPG,
  colorsGameJPG,
  ipcheckJPG,
  protfolioJPG,
  wallJPG,
  snakeJPG,
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
    backend: 'Works with backend',
  };
  const projects = [
    {
      name: 'Wall',
      description: (
        <span>
          Social media app built with {react}. User can make a post and publish
          it onto a public wall. Suggest a photo for the chosen title, or lets
          the user search for one. Stores data on google firebase backend
          service.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/Wall/',
      sourceUrl: 'https://github.com/zabtani/Wall',
      img: wallJPG,
      techs: ['react', 'html', 'css', 'firebase', 'mui'],
      /* prettier-ignore */
      features: [features.backend,features.async, features.apis ,features.mui,features.mobile],
    },
    {
      name: 'Snake',
      description: (
        <span>
          Old school snake game built with {react}. snake is picking apples and
          grow, game is over when the snake touch its own body.thin application
          that practice react hooks and state management. not responsive for
          mobile.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/Snake/',
      sourceUrl: 'https://github.com/zabtani/Snake',
      img: snakeJPG,
      techs: ['react', 'html', 'css'],
      /* prettier-ignore */
      features: [features.hooks,features.css],
    },
    {
      name: 'Noter',
      description: (
        <span>
          Notes application built with {react}. User can add dynamic labels and
          notes base on them. Includes active/completed notes list distribution,
          with a filter feature for each list.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/Noter/',
      sourceUrl: 'https://github.com/zabtani/Noter',
      img: noterJPG,
      techs: ['react', 'html', 'css', 'mui'],
      /* prettier-ignore */
      features: [features.crud,features.context,features.localStorage,features.mui,features.mobile],
    },

    {
      name: 'IP-check',
      description: (
        <span>
          Check IP address application built with {react}. Gives information
          base on provided IP or base on client IP (when first entered).
          Provides information of an IP like origin city and country,flag and
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
          This protfolio includes informative pages about my coding work like
          skills, resume and projects information. The contact page contains a
          form that send me an email with the applicant information (using
          emailJS API). The application collect data about the client like
          projects and pages he visited and send it together with the form to my
          personal email.
        </span>
      ),
      demoUrl: undefined,
      sourceUrl: 'https://github.com/zabtani/Protfolio',
      img: protfolioJPG,
      techs: ['react', 'html', 'css', 'mui'],
      /* prettier-ignore */
      features: [features.context,features.apis,features.localStorage,features.mui,features.animations,features.mobile],
    },
    {
      name: 'Shop',
      description: (
        <span>
          Shop application built with {plainJs}. This ecommerce website
          generates dynamic catigories like prices,discounts,geners and brands
          base on the data provided to the app. Includes search bar,business
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
      name: 'Colors-game',
      description: (
        <span>
          Colors memory game built with {plainJs}. User can choose player name
          and optional colors to memorize. Then, the game generates new level
          with some random colors snapshots for limited time. Player should
          recall which color was where. Levels gets harder by adding more colors
          to recall. Includes recoreds table, stores data in localStorage.
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
