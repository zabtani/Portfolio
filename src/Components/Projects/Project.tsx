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
import FadeAnimation from '../Animations/FadeAnimation';
import { useState } from 'react';
import { useContext } from 'react';
import ActionsContext from '../../store/ActionsProvider';
import Spinner from '../Animations/Spinner';
import { ProjectData } from '../../interface/Projects';
import Features from '../../enums/Features';
import { svgListItems } from '../../utils';
import { TECHS_SVGS, TOOLS_SVGS } from '../../globals';
import NavigationButton from './NavigationButton';

const Project = ({
  name,
  sourceUrl,
  features,
  techs,
  tools,
  demoUrl,
  description,
  imgs,
}: ProjectData) => {
  const actionsCtx = useContext(ActionsContext);
  const [imageIsReady, setImageIsReady] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const t = tools.map((tool) => [tool, TOOLS_SVGS[tool]]);
  const r = techs.map((tech) => [tech, TECHS_SVGS[tech]]);
  const techsArr = [...t, ...r];
  const techsSvgs = Object.fromEntries(techsArr);
  const projectTechsSvgs = svgListItems(techsSvgs);
  const reportProject = (projectName: string, linkType: string) => {
    actionsCtx.reportProject(`${projectName}${linkType}`);
  };
  const reportDemo = () => {
    reportProject(name, '(demo)');
  };
  const reportSource = () => {
    reportProject(name, '(source code)');
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [imgIdx, setImgIdx] = useState(0);
  const nextImg = () =>
    setImgIdx((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));

  const prevImg = () =>
    setImgIdx((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));

  const linkButtonProps = { variant: 'contained', color: 'primary' } as {};
  const projectFeatures = features.map((feature: Features, idx: number) => (
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
    href: demoUrl,
  } as {};
  const sourceLinkProps = {
    onClick: reportSource,
    onAuxClick: reportSource,
    href: sourceUrl,
  } as {};
  const featuresButtonProps = {
    color: 'primary',
    variant: 'outlined',
    onClick: handleExpandClick,
    endIcon: featuresIcon,
    className: classes.featuresButton,
  } as {};
  const generateImgCircles = () => {
    return (
      <div className={classes.imgsCount}>
        <div className={classes.countContainer}>
          {imgs.map((img: string, idx: number) => {
            return (
              <div
                className={
                  imgIdx === idx
                    ? `${classes.countCircle} ${classes.currentCircle}`
                    : classes.countCircle
                }
              ></div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <FadeAnimation>
      <Card className={classes.project}>
        <Typography className={classes.title} component="div">
          <h2> {name}</h2>
          <ul className={classes.svgs}>{projectTechsSvgs}</ul>
        </Typography>
        {/* prettier-ignore */}
        <CardActionArea>
          <div style={{position:'relative'}}>
            <CardMedia
            style={{display:imageIsReady?'block':'none'}}
                onLoad={() => setImageIsReady(true)}
                component="img"
                alt={name}
                title={name}
                image={imgs[imgIdx]}
              />
            {!imageIsReady && <Spinner />}
            <div className={classes.buttonsContainer}>
         {generateImgCircles()}
            <NavigationButton
              className={classes.left}
              onClick={prevImg}
            />
            <NavigationButton
              className={classes.right}
              onClick={nextImg}
            />
            </div>
          </div>
        </CardActionArea>
        <CardContent className={classes.content}>
          <Typography variant="body2" component="p">
            {description}
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
          {demoUrl && (
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
