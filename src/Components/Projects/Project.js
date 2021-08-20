import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import classes from './Project.module.css';
import { Reactjs, Html, Js, Css } from '../../Components';

export default function MediaCard(props) {
  const techSvgs = {
    react: <Reactjs key="react" />,
    html: <Html key="html" />,
    javascript: <Js key="js" />,
    css: <Css key="css" />,
  };
  const projectTechsSvgs = props.techs.map((tech) => {
    const Svg = techSvgs[tech];
    return Svg;
  });
  return (
    <Card className={classes.project}>
      <CardActionArea>
        <a href={props.demoUrl}>
          <Typography className={classes.title} variant="h5" component="h2">
            {props.name}
            <div className={classes.svgs}>{projectTechsSvgs}</div>
          </Typography>
          {/* prettier-ignore */}
          <CardMedia component="img" alt={props.name} title={props.name} image={props.img} />
        </a>
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          <a href={props.sourceUrl}> view code</a>
        </Button>
        {props.demoUrl && (
          <Button size="small" color="primary">
            <a href={props.demoUrl}> launch demo</a>
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
