import { h, Component } from 'preact';

const Header = () => {
  const active = {'fontWeight':'bold', 'color':'darkorange'};

  return (
    <div className='header-flex-container'>
      <div className='brand-aside'>
        <a href="/" className="brand"><strong>Sherman Chen</strong></a>
      </div>
      <div className='links-aside'>
        <a href="/resume" className="link link-nav">Resume</a>
        <a href="/projects" className="link link-nav">Projects</a>
        <a href="/about" className="link link-nav">About Me</a>
        <a href="/contact" className="link link-nav">Contact</a>
      </div>
    </div>
  )
};

export default Header;
