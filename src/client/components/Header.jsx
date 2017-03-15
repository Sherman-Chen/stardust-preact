import { h, Component } from 'preact';

const Header = () => {

  return (
    <header className='header-flex-container' role="navigation">
      <div>
        <h1><a href="/" className="brand"><strong>Sherman Chen</strong></a></h1>
      </div>
      <div className='links-aside'>
        <p><a href="/resume" className="link link-nav">Resume</a></p>
        <p><a href="/projects" className="link link-nav">Projects</a></p>
        <p><a href="/about" className="link link-nav">About</a></p>
        <p><a href="/contact" className="link link-nav">Contact</a></p>
      </div>
    </header>
  )
};

export default Header;
