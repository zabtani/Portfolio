import classes from './Welcome.module.css';
import WelcomeSVG from '../Svg/WelcomeSVG';
import ZoomAnimation from '../Animations/ZoomAnimation';
import { useEffect, useState } from 'react';

const Welcome = () => {
  const [fontIsReady, setFontIsReady] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(
      (res) => res.status === 'loaded' && setFontIsReady(true)
    );
  }, []);
  return (
    <ZoomAnimation in={fontIsReady}>
      <div className={classes.welcome}>
        <h1> Hello World</h1>
        <p>
          My name is Omer Zabtani 👋 <br />
          and i am looking for a web developer job.
        </p>
        <WelcomeSVG />
      </div>
    </ZoomAnimation>
  );
};

export default Welcome;
