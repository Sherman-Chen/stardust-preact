import { h } from 'preact';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className='flex-wrapper'>
      <Header />
      <section className='stretcher'>
        <h1>Let's get in touch!</h1>
        <h3><i className="fa fa-envelope icon"></i>Email</h3>
        <a className='link' href="mailto:shc410@gmail.com">shc410@gmail.com</a>
        <h3><i className="fa fa-phone icon"></i>Phone</h3>
        <a className='link' href="tel:4156234670">415-623-4670</a>
        <h2>Some other stuff to look at</h2>
        <p>Check out my <a className='link' href="https://www.linkedin.com/in/shermanchen410" target="_blank">LinkedIn</a></p>
        <p>Check out my <a className='link' href='https://www.github.com/Sherman-Chen' target='_blank'>GitHub</a></p>
      </section>
      <Footer />
    </div>
  )
};

export default Contact;
