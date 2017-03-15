import { h, Component } from 'preact';

const Footer = () => {
  return (
  	<footer>
    	<p className='footer'>San Francisco Bay Area, CA, United States <a href="https://www.linkedin.com/in/shermanchen410" className="icon-link" target="_blank" style={{'margin-left':'0.2rem'}}><i className="fa fa-linkedin-square icon" aria-hidden="true"></i></a><a href="http://github.com/Sherman-Chen" className='icon-link' target="_blank"><i className="fa fa-github icon" aria-hidden="true"></i></a><a href="https://twitter.com/_shermanchen" className='icon-link' target="_blank"><i className="fa fa-twitter-square icon" aria-hidden="true"></i></a>
    	</p>
    </footer>
  )
};

export default Footer;
