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
import { Reactjs, Html, Js, Css } from '../../Components';
import FadeAnimation from '../Animations/FadeAnimation';
import { useState } from 'react';
import { useContext } from 'react';
import ActionsContext from '../../store/ActionsProvider';

const Project = (props) => {
  const actionsCtx = useContext(ActionsContext);
  const [imageIsReady, setImageIsReady] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
              <div className={classes.svgs}>{projectTechsSvgs}</div>
            </Typography>
            {/* prettier-ignore */}
            <CardMedia onLoad={()=>setImageIsReady(true)} component="img" alt={props.name} title={props.name} image={props.img} />
          </a>
        </CardActionArea>
        <CardContent className={classes.content}>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
          <Button {...featuresButtonProps}>App features</Button>
          <Collapse in={expanded} timeout={80} unmountOnExit>
            <List className={classes.featuresList}>{projectFeatures}</List>
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
