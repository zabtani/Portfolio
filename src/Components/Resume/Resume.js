import FadeAnimation from '../Animations/FadeAnimation';
import ResumeSVG from '../Svg/ResumeSVG';
import classes from './Resume.module.css';
import { Button, Typography } from '@material-ui/core/';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from '../../resume.pdf';
import { useEffect } from 'react';

const Resume = (props) => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  return (
    <FadeAnimation>
      <div className={`${props.className} ${classes.resume}`}>
        <h2> Resume </h2>
        <div className={classes.content}>
          <Typography variant="body2" component="p">
            <span className={classes.svg}>
              <ResumeSVG />
            </span>
            Innovative, creative and enthusiastic. Great willingness and
            ambition to learn new skills and technologies. During my stay in
            Seattle I began to be fascinated by web programming and the world of
            high tech. I started coding by self learning and courses, and I
            continue to study on a daily basis. Currently looking for my first
            job.
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
            <Page scale={96 / 72} pageNumber={1} />
          </Document>
        </div>
      </div>
    </FadeAnimation>
  );
};

export default Resume;
