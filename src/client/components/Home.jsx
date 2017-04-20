import { h } from 'preact';

import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <main className="flex-wrapper">
      <Header />
      <article>
        <h1 className='hook' tabindex="1">Hi I'm Sherman. I build things, like this website for example.</h1>
        <section className='blurb'>
          <h3 tabindex="2"><i className="fa fa-users icon"></i>I'm a Frontend Guy.</h3>
          <p>I love all things Frontend Engineering, writing awesome HTML, CSS, and JavaScript. I especially enjoy using React and am quite the fanboy for Vue.js. I translate designs into reality, and make sure things look responsive and delightful across different browsers for all users.</p>
        </section>
        <section className='blurb'>
          <h3 tabindex="3"><i className="fa fa-server icon"></i>I'm a Backend Guy.</h3>
          <p>I enjoy the server side as well! I write Node with Express, do Websocket stuff, and dabble in Python & Django for web development and APIs. I muster the courage to write database schemas on occasion.</p>
        </section>
        <section className='blurb'>
          <h3 tabindex="4"><i className="fa fa-check-circle icon"></i>I'm a Testing Guy.</h3>
          <p>After all it's just as important as building the application. Mocha, and Chai aren't just tasty beverages to me. Protractor, Enzyme, and Jest aren't just words I would never use in everyday speech, although I do make use of Karma sometimes.</p>
        </section>
        <section className='blurb'>
          <h3 tabindex="5"><i className="fa fa-mobile icon"></i>Am I a Mobile Guy?</h3>
          <p>I've worked with React Native and Exponent before, and I'm always game for a challenge. I'm definitely a mobile first design approach guy though.</p>
        </section>
        <section className='blurb'>
          <h3 tabindex="6"><i className="fa fa-handshake-o icon"></i>Most Importantly...</h3>
          <p>I'm a teamwork and growth-oriented guy, and am always striving to improve myself. Let's have a conversation sometime and learn from each other!</p>
        </section>
      </article>
      <Footer />
    </main>
  )
}

export default Home;