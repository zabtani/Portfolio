import FadeAnimation from '../Animations/FadeAnimation';
import AboutSVG from '../Svg/AboutSVG';
import classes from './About.module.css';
import Typography from '@material-ui/core/Typography';

const About = (props) => {
  return (
    <FadeAnimation>
      <div className={`${props.className} ${classes.about}`}>
        <h2> About</h2>
        <div className={classes.content}>
          <div className={classes.svg}>
            <AboutSVG />
          </div>
          <Typography variant="body2" component="p">
            If you’re interested in playing around with React, you can use an
            online code playground. Try a Hello World template on CodePen,
            CodeSandbox, or Stackblitz. If you prefer to use your own text
            editor, you can also download this HTML file, edit it, and open it
            from the local filesystem in your browser. It does a slow runtime
            codecal in your browser. It does a slow runtime codecal filesystem
            in your browser. It does a slow runtime codecal filesystem in your
            browser. It does a slow runtime codecal filesystem in your browser.
            It does a slow runtime codecal filesystem in your browser. It does a
            slow runtime codecal filesystem in your browser. It does a slow
            runtime code transformation, so we’d only recommend using this for
            simple demos.
          </Typography>
        </div>
      </div>
    </FadeAnimation>
  );
};

export default About;
