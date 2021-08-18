import classes from './Projects.module.css';
import noterJPG from './noter.jpg';
import shopJPG from './shop.jpg';
import colorsGameJPG from './colorsGame.jpg';
import ipcheckJPG from './ipcheck.jpg';
import protfolioJPG from './protfolio.jpg';
import Project from './Project';
const Projects = (props) => {
  const projects = [
    {
      name: 'Noter App',
      description:
        'notes app build with React. allow to add dynamic labels and notes base on them. includes active/completed note list distribution, with a filter feature for each list.',
      demoUrl: 'https://zabtani.github.io/Noter/',
      img: noterJPG,
    },
    {
      name: 'Shop App',
      description: 'bla bla bla',
      demoUrl: 'https://zabtani.github.io/shop/',
      img: shopJPG,
    },
    {
      name: 'Colors game',
      description: 'bla bla bla',
      demoUrl: 'https://zabtani.github.io/Colors-game/',
      img: colorsGameJPG,
    },
    {
      name: 'IP check',
      description: 'bla bla bla',
      demoUrl: 'https://zabtani.github.io/IP-check/',
      img: ipcheckJPG,
    },
    {
      name: 'Protfolio',
      description: 'bla bla bla',
      demoUrl: false,
      img: protfolioJPG,
    },
  ];

  return (
    <div
      data-aos="zoom-in"
      className={`${props.className} ${classes.projects}`}
    >
      <h2>My Projects</h2>
      <p>this is my projects.</p>
      <div className={classes.projectsContainer}>
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
