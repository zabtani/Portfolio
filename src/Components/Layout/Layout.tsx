import classes from './Layout.module.css';
import React, { useEffect, useRef, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GithubSVG from '../Svg/GithubSVG';
import LinkedinSVG from '../Svg/LinkedinSVG';
import LogoSVG from '../Svg/LogoSVG';
import FadeAnimation from '../Animations/FadeAnimation';
import { useContext } from 'react';
import ActionsContext from '../../store/ActionsProvider';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { GITHUB_LINK, LINKEDIN_LINK, SECTIONS_DATA } from '../../globals';

const Layout = () => {
  const actionsDataCtx = useContext(ActionsContext);
  const [isSlideDone, setIsSlideDone] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenu] = useState<boolean>(false);
  const handleLink = (sectionName: string) => {
    actionsDataCtx.reportPage(sectionName);
    if (mobileMenuOpen) {
      setMobileMenu(false);
      setIsSlideDone(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenu((state) => !state);
    mobileMenuOpen
      ? setIsSlideDone(false)
      : setTimeout(() => {
          setIsSlideDone(true);
        }, 150);
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
  const sections = SECTIONS_DATA.map((section) => {
    return (
      <li key={section.name}>
        <Link to={section.name}>
          <button type="button" onClick={() => handleLink(section.name)}>
            {section.title}
          </button>
        </Link>
      </li>
    );
  });
  const sideLinks = (
    <ul className={classes.sidelinks}>
      <li>
        <a href={LINKEDIN_LINK}>
          <LinkedinSVG />
        </a>
      </li>
      <li>
        <a href={GITHUB_LINK}>
          <GithubSVG />
        </a>
      </li>
    </ul>
  );

  useEffect(() => {
    document.documentElement.style.overflowY = mobileMenuOpen
      ? 'hidden'
      : 'scroll';
    window.scrollTo(0, 0);
  }, [mobileMenuOpen]);
  const navbarClass = mobileMenuOpen
    ? `${classes.navbar} ${classes.shown}`
    : classes.navbar;

  return (
    <>
      <div>
        <header>
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
              <FadeAnimation in={isSlideDone || !mobileMenuOpen}>
                <ul>
                  {sections}
                  {sideLinks}
                </ul>
              </FadeAnimation>
            </nav>
          </div>
        </header>
        <Outlet />
      </div>
      <div className={classes.area}>
        <ul className={classes.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Layout;
