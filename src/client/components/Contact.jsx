import { h } from 'preact';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <main className='flex-wrapper'>
      <Header />
      <section className='stretcher'>
        <h1 tabindex="1" style={{textAlign: "center"}}>Let's get in touch!</h1>
        <h3 tabindex="2"><i className="fa fa-envelope icon" aria-hidden="true"></i>Email</h3>
        <a className='link' href="mailto:shc410@gmail.com">shc410@gmail.com</a>
        <h3 tabindex="3"><i className="fa fa-phone icon" aria-hidden="true"></i>Phone</h3>
        <a className='link' href="tel:4156234670">415-623-4670</a>
        <h2>Some other stuff to look at</h2>
        <p tabindex="4">Check out my <a className='link' href="https://www.linkedin.com/in/shermanchen410" target="_blank">LinkedIn</a></p>
        <p tabindex="5">Check out my <a className='link' href='https://www.github.com/Sherman-Chen' target='_blank'>GitHub</a></p>
        <p tabindex="6">Follow my stream of consciousness on <a className='link' href="https://twitter.com/_shermanchen" target='_blank'>Twitter</a></p>
      </section>
      <Footer />
    </main>
  )
};

export default Contact;
