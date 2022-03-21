import FadeAnimation from '../Animations/FadeAnimation';
import ResumeSVG from '../Svg/ResumeSVG';
import classes from './Resume.module.css';
import { Button, Typography } from '@material-ui/core/';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from '../../resume.pdf';
import { useEffect } from 'react';
import Spinner from '../Animations/Spinner';
import { RESUME_SUMMARY } from '../../globals';

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
            {RESUME_SUMMARY}
          </Typography>
        </div>

        <div className={classes.pdf}>
          <Document loading={<Spinner />} file={resumePDF}>
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
            <Page loading="" scale={96 / 72} pageNumber={1} />
          </Document>
        </div>
      </div>
    </FadeAnimation>
  );
};

export default Resume;
