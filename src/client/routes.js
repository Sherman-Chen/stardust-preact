import Router from 'preact-router';
import { h } from 'preact';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

const Routes = () => (
  <Router>
    <Home path='/' />
    <Resume path='/resume' />
    <Contact path='/contact' />
    <AboutMe path='/about' />
    <Projects path='/projects' />
    <NotFound type='404' default />
  </Router>
)

export default Routes;