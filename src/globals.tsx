import Paths from './enums/Paths';

import Features from './enums/Features';
import { ProjectData } from './interface/Projects';
import {
  noterJPG1,
  noterJPG2,
  noterJPG3,
  shopJPG1,
  shopJPG2,
  shopJPG3,
  colorsGameJPG1,
  colorsGameJPG2,
  colorsGameJPG3,
  ipcheckJPG1,
  ipcheckJPG2,
  ipcheckJPG3,
  portfolioJPG1,
  portfolioJPG2,
  portfolioJPG3,
  wallJPG1,
  wallJPG2,
  wallJPG3,
  snakeJPG1,
  snakeJPG2,
  snakeJPG3,
  forecastJPG1,
  forecastJPG2,
  forecastJPG3,
  Reactjs,
  Html,
  Js,
  Css,
  Firebase,
  Mui,
  Typescript,
  Mobx,
  Redux,
  Vscode,
  Github,
  Git,
  Npm,
} from './Components';

import { Techs } from './enums/Techs';
import { Tools } from './enums/Tools';
// nav links data
export const SECTIONS_DATA = [
  { name: Paths.HOME, title: 'Introduction' },
  { name: Paths.ABOUT, title: 'Resume' },
  { name: Paths.SKILLS, title: 'Skills' },
  { name: Paths.CONTACT, title: 'Contact' },
  { name: Paths.PROJECTS, title: 'Projects' },
];
//nav links
export const LINKEDIN_LINK = 'https://linkedin.com/in/omer-zabtani-b09543155';
export const GITHUB_LINK = 'https://linkedin.com/in/omer-zabtani-b09543155';

export const SKILLS_SUMMARY = (
  <p>
    Focused on frontend technologies. Javascript, together with HTML and
    CSS.work with TypeScript. A big fan of React.js as a framework including
    features like Hooks and Redux, Mobx and more. Additionally,I have
    experienced with the basics of several backend technologies. With an
    understanding of client/server communication.
  </p>
);
//resume summary
export const RESUME_SUMMARY = (
  <span>
    Innovative, creative and enthusiastic. Great willingness and ambition to
    learn new skills and technologies. During my stay in Seattle I began to be
    fascinated by web programming and the world of high tech. I started coding
    by self learning and courses, and I continue to study on a daily basis.
    Currently looking for my first job.
  </span>
);

//projects data
const react = <b>React</b>;
const plainJs = <b>Plain JavaScript</b>;
const typescript = <b>Typescript</b>;
export const PROJECTS: ProjectData[] = [
  {
    name: 'Forecast',
    description: (
      <span>
        Weather forecast app built with {react} and {typescript}. initially the
        app present's user city's forecast base on the geolocation. then user
        can also search for city (and get suggestions).The app generates the
        location forecast (includes 5 days forecast and more information). user
        can choose between celsius/fahrenheit units, add location to favorites,
        and toggle between dark/light mode.
      </span>
    ),
    demoUrl: 'https://zabtani.github.io/weather-forecast',
    sourceUrl: 'https://github.com/zabtani/weather-forecast/tree/master',
    imgs: [forecastJPG1, forecastJPG2, forecastJPG3],
    techs: [Techs.REACT, Techs.HTML, Techs.REDUX, Techs.TS, Techs.CSS3],
    tools: [Tools.MUI],
    /* prettier-ignore */
    features: [Features.APIS,Features.ASYNC, Features.APIS ,Features.ASYNC_THUNKS,Features.MUI,Features.MOBILE],
  },
  {
    name: 'Wall',
    description: (
      <span>
        Social media app built with {react}. User can make a post and publish it
        onto a public wall. Suggest a photo for the chosen title, or lets the
        user search for one. Stores data on google firebase backend service.
      </span>
    ),
    demoUrl: 'https://zabtani.github.io/Wall/',
    sourceUrl: 'https://github.com/zabtani/Wall',
    imgs: [wallJPG1, wallJPG2, wallJPG3],
    techs: [Techs.REACT, Techs.HTML, Techs.CSS3],
    tools: [Tools.FIREBASE, Tools.MUI],
    /* prettier-ignore */
    features: [Features.BACKEND,Features.ASYNC, Features.APIS ,Features.HTTP_HOOK,Features.MUI,Features.MOBILE],
  },
  {
    name: 'Snake',
    description: (
      <span>
        Old school snake game built with {react}. snake is picking apples and
        grow, game is over when the snake touch its own body.thin application
        that practice react hooks and state management. not responsive for
        mobile.
      </span>
    ),
    demoUrl: 'https://zabtani.github.io/Snake/',
    sourceUrl: 'https://github.com/zabtani/Snake',
    imgs: [snakeJPG1, snakeJPG2, snakeJPG3],
    techs: [Techs.REACT, Techs.HTML, Techs.CSS3],
    tools: [],

    /* prettier-ignore */
    features: [Features.HOOKS,Features.CSS3],
  },
  {
    name: 'Noter',
    description: (
      <span>
        Notes application built with {react}. User can add dynamic labels and
        notes base on them. Includes active/completed notes list distribution,
        with a filter feature for each list.
      </span>
    ),
    demoUrl: 'https://zabtani.github.io/Noter/',
    sourceUrl: 'https://github.com/zabtani/Noter',
    imgs: [noterJPG1, noterJPG2, noterJPG3],
    techs: [Techs.REACT, Techs.HTML, Techs.CSS3],
    tools: [Tools.MUI],
    /* prettier-ignore */
    features: [Features.CRUD,Features.CONTEXT,Features.LOCAL_STORAGE,Features.MUI,Features.MOBILE],
  },

  {
    name: 'IP-check',
    description: (
      <span>
        Check IP address application built with {react}. Gives information base
        on provided IP or base on client IP (when first entered). Provides
        information of an IP like origin city and country,flag and location on a
        map. works with several API's like mapbox, ipgeolocation,cloudflare and
        unsplash.
      </span>
    ),
    demoUrl: 'https://zabtani.github.io/IP-check/',
    sourceUrl: 'https://github.com/zabtani/IP-check',
    imgs: [ipcheckJPG1, ipcheckJPG2, ipcheckJPG3],
    techs: [Techs.REACT, Techs.HTML, Techs.CSS3],
    tools: [],
    /* prettier-ignore */
    features: [Features.HOOKS, Features.ASYNC, Features.APIS,Features.MOBILE],
  },
  {
    name: 'Portfolio',
    description: (
      <span>
        My web devloper portfolio you are using right now, built with {react}.
        This portfolio includes informative pages about my coding work like
        skills, resume and projects information. The contact page contains a
        form that send me an email with the applicant information (using emailJS
        API). The application collect data about the client like projects and
        pages he visited and send it together with the form to my personal
        email.
      </span>
    ),
    demoUrl: undefined,
    sourceUrl: 'https://github.com/zabtani/Portfolio',
    imgs: [portfolioJPG1, portfolioJPG2, portfolioJPG3],
    techs: [Techs.REACT, Techs.HTML, Techs.CSS3, Techs.TS],
    tools: [Tools.MUI],
    /* prettier-ignore */
    features: [Features.CONTEXT,Features.APIS,Features.LOCAL_STORAGE,Features.MUI,Features.ANIMATIONS,Features.MOBILE],
  },
  {
    name: 'Shop',
    description: (
      <span>
        Shop application built with {plainJs}. This ecommerce website generates
        dynamic catigories like prices,discounts,geners and brands base on the
        data provided to the app. Includes search bar,business information pages
        and cart features.
      </span>
    ),
    demoUrl: 'https://zabtani.github.io/shop/',
    sourceUrl: 'https://github.com/zabtani/shop',
    imgs: [shopJPG1, shopJPG2, shopJPG3],
    techs: [Techs.JS, Techs.HTML, Techs.CSS3],
    tools: [],
    features: [
      Features.JS_CLASSES,
      Features.DOM,
      Features.CSS3,
      Features.MOBILE,
    ],
  },
  {
    name: 'Colors-game',
    description: (
      <span>
        Colors memory game built with {plainJs}. User can choose player name and
        optional colors to memorize. Then, the game generates new level with
        some random colors snapshots for limited time. Player should recall
        which color was where. Levels gets harder by adding more colors to
        recall. Includes recoreds table, stores data in localStorage.
      </span>
    ),
    demoUrl: 'https://zabtani.github.io/Colors-game/',
    sourceUrl: 'https://github.com/zabtani/Colors-game',
    imgs: [colorsGameJPG1, colorsGameJPG2, colorsGameJPG3],
    techs: [Techs.JS, Techs.HTML, Techs.CSS3],
    tools: [],
    /* prettier-ignore */
    features: [Features.MVC, Features.JS_CLASSES, Features.DOM, Features.CSS3,Features.MOBILE],
  },
];
//Techs and Tools data
const html = {
  Svg: Html,
  link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
};
const js = {
  Svg: Js,
  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
};
const css = {
  Svg: Css,
  link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
};
const mui = { Svg: Mui, link: 'https://mui.com/' };
const reactjs = { Svg: Reactjs, link: 'https://reactjs.org/' };
const firebase = { Svg: Firebase, link: 'https://firebase.google.com/' };
const mobx = { Svg: Mobx, link: 'https://mobx.js.org/README.html' };
const ts = { Svg: Typescript, link: 'https://www.typescriptlang.org/' };
const redux = { Svg: Redux, link: 'https://redux.js.org/' };
const npm = { Svg: Npm, link: 'https://www.npmjs.com/' };
const vscode = { Svg: Vscode, link: 'https://code.visualstudio.com/' };
const github = { Svg: Github, link: GITHUB_LINK };
const git = { Svg: Git, link: '' };

//techs obj
export const TECHS_SVGS = {
  [Techs.REACT]: reactjs,
  [Techs.HTML]: html,
  [Techs.JS]: js,
  [Techs.CSS3]: css,
  [Techs.MOBX]: mobx,
  [Techs.TS]: ts,
  [Techs.REDUX]: redux,
};
//tools obj
export const TOOLS_SVGS = {
  [Tools.FIREBASE]: firebase,
  [Tools.GITHUB]: github,
  [Tools.GIT]: git,
  [Tools.MUI]: mui,
  [Tools.NPM]: npm,
  [Tools.VSCODE]: vscode,
};
