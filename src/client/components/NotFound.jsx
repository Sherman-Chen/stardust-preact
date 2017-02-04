import { h } from 'preact';
import Header from './Header';
import Footer from './Footer';

const NotFound = () => {
  return (
    <main className='flex-wrapper'>
    	<Header />
      <section className='not-found'>
        <h1 style={{'color':'red'}}>404 - Page Not Found</h1>
        <p>Sorry this page doesn't seem to exist at the moment.</p>
        <p>Would you like to go back <a href="/" className="link">home</a> instead?</p>
      </section>
      <Footer />
    </main>
  )
};

export default NotFound;
