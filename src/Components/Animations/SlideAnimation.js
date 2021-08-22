import Zoom from '@material-ui/core/Zoom/';
const ZoomAnimation = (props) => {
  return (
    <Zoom in={props.in === false ? false : true} timeout={{ enter: 800 }}>
      {props.children}
    </Zoom>
  );
};

export default ZoomAnimation;
