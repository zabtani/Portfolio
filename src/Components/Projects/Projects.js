import classes from './Projects.module.css';
import noterJPG from './noter.jpg';
import shopJPG from './shop.jpg';
import colorsGameJPG from './colorsGame.jpg';
import ipcheckJPG from './ipcheck.jpg';
import protfolioJPG from './protfolio.jpg';
import Project from './Project';
const Projects = (props) => {
  const react = <b>React</b>;
  const plainJs = <b>Plain JavaScript</b>;
  const projects = [
    {
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
      name: 'Colors game',
      description: 'bla bla bla',
      demoUrl: 'https://zabtani.github.io/Colors-game/',
      sourceUrl: 'https://github.com/zabtani/Colors-game',
      img: colorsGameJPG,
      techs: ['javascript', 'html', 'css'],
    },
    {
      name: 'Protfolio',
      description: 'bla bla bla',
      demoUrl: false,
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
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
