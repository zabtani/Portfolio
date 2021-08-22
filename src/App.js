import { useState } from 'react';
import classes from './App.module.css';
import Header from './Components/Layout/Header';
import Welcome from './Components/Welcome/Welcome';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
function App() {
  const [show, setShow] = useState({
    section: 'welcome',
  });
  const showSectionHandler = (section) => {
    setShow({ section: section });
  };
  const sections = [
    { name: 'welcome', title: 'Homepage', component: Welcome },
    { name: 'about', title: 'About me', component: About },
    { name: 'skills', title: 'Skills', component: Skills },
    { name: 'contact', title: 'Contact me', component: Contact },
    { name: 'projects', title: 'Projects', component: Projects },
  ];

  const selectedSection = sections.map((section) => {
    const Section = section.component;
    return (
      show.section === section.name && (
        <Section key={section.name} className={classes.section} />
      )
    );
  });
  const sectionsData = sections.filter((section) => section.component);
  return (
    <div className={classes.app}>
      <Header show={showSectionHandler} sections={sectionsData} />
      {selectedSection}
    </div>
  );
}
export default App;
