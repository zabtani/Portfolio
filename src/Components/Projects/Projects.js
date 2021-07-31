import classes from './Projects.module.css';
import noterJPG from './noter.jpg';
import shopJPG from './shop.jpg';
import colorsGameJPG from './colorsGame.jpg';

const Projects = (props) => {
  return (
    <div
      data-aos="zoom-in"
      className={`${props.className} ${classes.projects}`}
    >
      <h2>My Projects</h2>
      <p>
        {' '}
        online code playground. Try a Hello World template on CodePen,
        CodeSandbox, or Stackblitz. If you prefer to use your own text editor,
        you can also download this HTML file, edit it, and open it from the
      </p>
      <div className={classes.projectsContainer}>
        <div className={classes.project}>
          <h3>Noter App</h3>
          <a href="https://zabtani.github.io/Noter/">
            <img src={noterJPG} />
            <div className={classes.demoLink}>watch live demo</div>
          </a>
          <p>
            If you’re interested in playing around with React, you can use an
            online code playground. Try a Hello World template on CodePen,
            CodeSandbox, or Stackblitz. If you prefer to use your own text
            editor, you can also download this HTML file, edit it, and open it
            from the local filesystem in your browser. It does a slow runtime
            code transformation, so we’d only recommend using this for simple
            demos.
          </p>
        </div>
        <div className={classes.project}>
          <h3>Shop App</h3>
          <a href="https://zabtani.github.io/shop/">
            <img src={shopJPG} />
            <div className={classes.demoLink}>watch live demo</div>
          </a>
          <p>
            If you’re interested in playing around with React, you can use an
            online code playground. Try a Hello World template on CodePen,
            CodeSandbox, or Stackblitz. If you prefer to use your own text
            editor, you can also download this HTML file, edit it, and open it
            from the local filesystem in your browser. It does a slow runtime
            code transformation, so we’d only recommend using this for simple
            demos.
          </p>
        </div>
        <div className={classes.project}>
          <h3>Colors game</h3>
          <a href="https://zabtani.github.io/Colors-game/">
            <img src={colorsGameJPG} />
            <div className={classes.demoLink}>watch live demo</div>
          </a>
          <p>
            If you’re interested in playing around with React, you can use an
            online code playground. Try a Hello World template on CodePen,
            CodeSandbox, or Stackblitz. If you prefer to use your own text
            editor, you can also download this HTML file, edit it, and open it
            from the local filesystem in your browser. It does a slow runtime
            code transformation, so we’d only recommend using this for simple
            demos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
