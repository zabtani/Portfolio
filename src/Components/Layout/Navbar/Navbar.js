import classes from './Navbar.module.css';
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GithubSVG from '../../Svg/GithubSVG';
import LinkedinSVG from '../../Svg/LinkedinSVG';
import LogoSVG from '../../Svg/LogoSVG';
import FadeAnimation from '../../Animations/FadeAnimation';
const Navbar = (props) => {
  const [isSlideDone, setIsSlideDone] = useState(false);
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const handleLink = (sectionName) => {
    if (mobileMenuOpen) {
      setMobileMenu(false);
      setIsSlideDone(false);
    }
    props.show(sectionName);
  };

  const toggleMobileMenu = () => {
    setMobileMenu((state) => !state);
    mobileMenuOpen
      ? setIsSlideDone(false)
      : setTimeout(() => {
          setIsSlideDone(true);
        }, 300);
  };

  const logo = (
    <div className={classes.logo}>
      <LogoSVG />
    </div>
  );
  const menuIcon = (
    <IconButton onClick={toggleMobileMenu} className={classes.menuButton}>
      <MenuIcon />
    </IconButton>
  );
  const sections = props.sections.map((section) => {
    return (
      <li key={section.name}>
        <button type="button" onClick={handleLink.bind(null, section.name)}>
          {section.title}
        </button>
      </li>
    );
  });
  const sideLinks = (
    <ul className={classes.sidelinks}>
      <li>
        <a href="https://linkedin.com/in/omer-zabtani-b09543155">
          <LinkedinSVG />
        </a>
      </li>
      <li>
        <a href="https://github.com/zabtani">
          <GithubSVG />
        </a>
      </li>
    </ul>
  );
  document.documentElement.style.overflowY = mobileMenuOpen
    ? 'hidden'
    : 'scroll';

  const navbarClass = mobileMenuOpen
    ? `${classes.navbar} ${classes.shown}`
    : classes.navbar;
  return (
    <div className={navbarClass}>
      <div
        onClick={() => {
          toggleMobileMenu();
        }}
        className={classes.backdrop}
      ></div>
      <nav>
        {menuIcon}
        {logo}
        <FadeAnimation in={isSlideDone || window.screen.width > 650}>
          <ul>
            {sections}
            {sideLinks}
          </ul>
        </FadeAnimation>
      </nav>
    </div>
  );
};

export default Navbar;
