import FadeAnimation from '../Animations/FadeAnimation';
import AboutSVG from '../Svg/AboutSVG';
import classes from './About.module.css';
import { Button, Typography } from '@material-ui/core/';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from '../../resume.pdf';
import { useEffect } from 'react';
const About = (props) => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);
  return (
    <FadeAnimation>
      <div className={`${props.className} ${classes.about}`}>
        <h2> Resume </h2>
        <div className={classes.content}>
          <Typography variant="body2" component="p">
            <span className={classes.svg}>
              <AboutSVG />
            </span>
            Innovative, creative and enthusiastic. great willingness and
            ambition to learn new skills and technologies. hard worker who never
            gets tired. during my stay in Seattle i began to be fascinated by
            web programming and the world of high tech. i started coding by self
            learning and courses, and i keep on studying by myself every day.
            currently looking for my first job as a front end devloper.
          </Typography>
        </div>

        <div className={classes.pdf}>
          <Document loading="Loading resume PDF..." file={resumePDF}>
            <form method="get" action={resumePDF}>
              <Button
                endIcon={<GetAppIcon />}
                type="submit"
                variant="contained"
                color="primary"
              >
                download PDF
              </Button>
            </form>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </FadeAnimation>
  );
};

export default About;
