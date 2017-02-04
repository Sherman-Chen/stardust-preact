import { h, Component } from 'preact';

const Header = () => {

  return (
    <div className='header-flex-container'>
      <div>
        <p><a href="/" className="brand"><strong>Sherman Chen</strong></a></p>
      </div>
      <div className='links-aside'>
        <p><a href="/resume" className="link link-nav">Resume</a></p>
        <p><a href="/projects" className="link link-nav">Projects</a></p>
        <p><a href="/about" className="link link-nav">About Me</a></p>
        <p><a href="/contact" className="link link-nav">Contact</a></p>
      </div>
    </div>
  )
};

export default Header;
