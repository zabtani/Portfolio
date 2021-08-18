import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from './Project.module.css';

export default function MediaCard(props) {
  console.log(props.img);
  return (
    <Card className={classes.project}>
      <CardActionArea>
        <a href={props.demoUrl}>
          <Typography className={classes.title} variant="h5" component="h2">
            {props.name}
          </Typography>
          <CardMedia
            component="img"
            alt={props.name}
            title={props.name}
            image={props.img}
          />
        </a>
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          view source
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
