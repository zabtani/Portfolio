import Fade from '@material-ui/core/Fade/';
const FadeAnimation = (props) => {
  return (
    <Fade in={props.in === false ? false : true} timeout={{ enter: 650 }}>
      {props.children}
    </Fade>
  );
};

export default FadeAnimation;
