import classes from './Home.module.css';
import WelcomeSVG from '../Svg/WelcomeSVG';
import ZoomAnimation from '../Animations/ZoomAnimation';
import { useEffect, useState } from 'react';

const Home = () => {
  const [fontIsReady, setFontIsReady] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(
      (res) => res.status === 'loaded' && setFontIsReady(true)
    );
  }, []);
  return (
    <ZoomAnimation in={fontIsReady}>
      <div className={classes.Home}>
        <h1> Hello World</h1>
        <p>
          My name is Omer Zabtani 👋 <br />
          and i am looking for a Web Developer job.
        </p>
        <WelcomeSVG />
      </div>
    </ZoomAnimation>
  );
};

export default Home;
