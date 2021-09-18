import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Collapse,
  List,
  ListItemIcon,
  ListItem,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import classes from './Project.module.css';
import { Reactjs, Html, Js, Css, Firebase, Mui } from '../../Components';
import FadeAnimation from '../Animations/FadeAnimation';
import { useState } from 'react';
import { useContext } from 'react';
import ActionsContext from '../../store/ActionsProvider';
import Spinner from '../Animations/Spinner';

const Project = (props) => {
  const actionsCtx = useContext(ActionsContext);
  const [imageIsReady, setImageIsReady] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const techSvgs = {
    react: <Reactjs />,
    html: <Html />,
    javascript: <Js />,
    css: <Css />,
    firebase: <Firebase />,
    mui: <Mui />,
  };
  const projectTechsSvgs = props.techs.map((tech) => {
    const Svg = techSvgs[tech];
    return <li key={tech}>{Svg}</li>;
  });
  const reportProject = (projectName, linkType) => {
    actionsCtx.reportProject(`${projectName}${linkType}`);
  };
  const reportDemo = () => {
    reportProject(props.name, '(demo)');
  };
  const reportSource = () => {
    reportProject(props.name, '(source code)');
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const linkButtonProps = { variant: 'contained', color: 'primary' };
  const projectFeatures = props.features.map((feature, idx) => (
    <ListItem key={idx}>
      <ListItemIcon className={classes.listItemIcon}>
        <KeyboardArrowRightIcon />
      </ListItemIcon>
      {feature}
    </ListItem>
  ));
  const featuresIcon = expanded ? (
    <ExpandLessIcon className={classes.expandIcon} />
  ) : (
    <ExpandMoreIcon className={classes.expandIcon} />
  );
  const demoLinkProps = {
    onClick: reportDemo,
    onAuxClick: reportDemo,
    href: props.demoUrl,
  };
  const sourceLinkProps = {
    onClick: reportSource,
    onAuxClick: reportSource,
    href: props.sourceUrl,
  };
  const featuresButtonProps = {
    color: 'primary',
    variant: 'outlined',
    onClick: handleExpandClick,
    endIcon: featuresIcon,
    className: classes.featuresButton,
  };

  return (
    <FadeAnimation>
      <Card className={classes.project}>
        <CardActionArea>
          <a {...demoLinkProps}>
            <Typography className={classes.title} component="div">
              <h2> {props.name}</h2>
              <ul className={classes.svgs}>{projectTechsSvgs}</ul>
            </Typography>
            {/* prettier-ignore */}

            <CardMedia
            style={{display:imageIsReady?'block':'none'}}
                onLoad={() => setImageIsReady(true)}
                component="img"
                alt={props.name}
                title={props.name}
                image={props.img}
              />

            {!imageIsReady && <Spinner />}
          </a>
        </CardActionArea>
        <CardContent className={classes.content}>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
          <Button {...featuresButtonProps}>App features</Button>
          <Collapse in={expanded} timeout={80} unmountOnExit>
            <List>{projectFeatures}</List>
          </Collapse>
        </CardContent>

        <CardActions className={classes.actions}>
          <Button {...linkButtonProps}>
            <a {...sourceLinkProps}>view code</a>
          </Button>
          {props.demoUrl && (
            <Button {...linkButtonProps}>
              <a {...demoLinkProps}>launch demo</a>
            </Button>
          )}
        </CardActions>
      </Card>
    </FadeAnimation>
  );
};
export default Project;
