import { ActionsProvider } from './store/ActionsProvider';
import classes from './App.module.css';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Paths from './enums/Paths';
import Layout from './Components/Layout/Layout';
import { useEffect, useRef } from 'react';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
const cls = {
  className: classes.section,
};
function App() {
  return (
    <ActionsProvider>
      <div className={classes.app}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path={Paths.HOME} element={<Home />} />
              <Route path={Paths.ABOUT} element={<Resume {...cls} />} />
              <Route path={Paths.CONTACT} element={<Contact {...cls} />} />
              <Route path={Paths.SKILLS} element={<Skills {...cls} />} />
              <Route path={Paths.PROJECTS} element={<Projects {...cls} />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ActionsProvider>
  );
}
export default App;
