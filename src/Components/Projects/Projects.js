import {
  noterJPG,
  shopJPG,
  colorsGameJPG,
  ipcheckJPG,
  protfolioJPG,
} from '../../Components';
import classes from './Projects.module.css';

import Project from './Project';
const Projects = (props) => {
  const react = <b>React</b>;
  const plainJs = <b>Plain JavaScript</b>;
  const projects = [
    {
      id: '001',
      name: 'Noter App',
      description: (
        <span>
          Notes app build with {react}. allow to add dynamic labels and notes
          base on them. includes active/completed note list distribution, with a
          filter feature for each list.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/Noter/',
      sourceUrl: 'https://github.com/zabtani/Noter',
      img: noterJPG,
      techs: ['react', 'html', 'css'],
    },
    {
      id: '002',
      name: 'IP check',
      description: (
        <span>
          Check IP addresses app build with {react}. gives information base on
          provided input or base on client IP (when first enter if via desktop).
          works with several API's and provides information on the IP location
          together with a map.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/IP-check/',
      sourceUrl: 'https://github.com/zabtani/IP-check',
      img: ipcheckJPG,
      techs: ['react', 'html', 'css'],
    },
    {
      id: '003',
      name: 'Shop App',
      description: (
        <span>
          Shop app build with {plainJs}. this ecommerce shop generates dynamic
          catigories like prices,discounts,geners and brands base on the data
          provided to the app.
        </span>
      ),
      demoUrl: 'https://zabtani.github.io/shop/',
      sourceUrl: 'https://github.com/zabtani/shop',
      img: shopJPG,
      techs: ['javascript', 'html', 'css'],
    },
    {
      id: '004',
      name: 'Colors game',
      description: 'bla bla bla',
      demoUrl: 'https://zabtani.github.io/Colors-game/',
      sourceUrl: 'https://github.com/zabtani/Colors-game',
      img: colorsGameJPG,
      techs: ['javascript', 'html', 'css'],
    },
    {
      id: '005',
      name: 'Protfolio',
      description: 'bla bla bla',
      demoUrl: undefined,
      sourceUrl: 'https://github.com/zabtani/Protfolio',
      img: protfolioJPG,
      techs: ['react', 'html', 'css'],
    },
  ];

  return (
    <div
      data-aos="zoom-in"
      className={`${props.className} ${classes.projects}`}
    >
      <h2>My Projects</h2>
      <p>projects that i build in order to practice</p>
      <div className={classes.projectsContainer}>
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
