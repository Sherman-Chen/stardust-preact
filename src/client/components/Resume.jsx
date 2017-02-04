import { h } from 'preact';
import Header from './Header';
import Footer from './Footer';

const Resume = () => {
  return (
    <main className='flex-wrapper'>
      <Header />
      <section className='blurb'>
        <h1>I'm actively job searching at the moment!</h1>
          <ul>
            <li><i className="fa fa-laptop icon"></i>I'm looking for work as a Software Engineer.</li>
            <li><i className="fa fa-sitemap icon"></i>I bring an expertise in JavaScript and Full Stack Web Development.</li>
            <li><i className="fa fa-ra icon"></i>I'm a keen believer in teamwork, clear communication, and learning new things!</li>
            <li><i className="fa fa-rocket icon"></i>I always bring an earnest, and humble attitude when it comes to building and engineering.</li>
            <li><i className="fa fa-info icon"></i>Let's get in <a href="/contact" className="link">touch</a> if I sound like someone you might want to work with!</li>
          </ul>
      </section>
      <section className="blurb">
        <h3>Professional Experience</h3>
        <p>From 2014 - 2015: <b>General Manager</b> @ <a className='link' href="http://www.indigi-usa.com/" target='_blank'>Indigi</a></p>
        <ul>
          <li><i className="fa fa-shopping-cart icon"></i>Managed multiple digital storefronts including Amazon, Jet, Walmart, Newegg, Rakuten, and others.</li>
          <li><i className="fa fa-flag icon"></i>Supervised small team in Customer Service, Order Invoicing, Merchandise Fulfillment, and Inventory.</li>
          <li><i className="fa fa-money icon"></i>Managed $2 Million in product and growth.</li>
          <li><i className="fa fa-shopping-bag icon"></i>Created and maintained company e-commerce store site using Shopify and Volusion.</li>
        </ul>
      </section>
      <section className="blurb">
        <h3>Skills</h3>
        <ul>
          <li><i className="fa fa-pencil icon"></i><b>Frontend</b>: In past projects I have used React, React Native, and Angular. I have experience with jQuery, and Backbone as well. Really excited with the potential of Vue.js. I make a committment to building responsive, cross-browser compatible, acessibility for all, and mobile first design applications.</li>
          <li><i className="fa fa-cogs icon"></i><b>Backend</b>: For the server side of things I program mostly in Node with the Express framework, and use Websockets on occasion. Currently exploring the Django framework.</li>
          <li><i className="fa fa-database icon"></i><b>Databases</b>: I'm a nice guy, but I'm also a MEA/RN guy so MongoDB is my go to. I have also utilized MySQL, MariaDB, and SQLite before.</li>
          <li><i className="fa fa-code-fork icon"></i><b>Version Control</b>: In event of fire, git checkout -b ahhhhhfire, git add -A (it's an emergency!), git push origin ahhhhhfire, calmly exit building. Git saves lives, frequent commits prevent headaches.</li>
          <li><i className="fa fa-terminal icon"></i><b>Build</b>: Webpack and NPM scripts are cool, have also used Grunt, Gulp, and Bower.</li>
          <li><i className="fa fa-globe icon"></i><b>Deployment</b>: I'm not the most skilled at DevOps, but I'm constantly improving. This site is actively deployed via Heroku, and previous applications were deployed using Heroku, AWS, and Digital Ocean. Docker is pretty neat, containerize everything! I do my best to write scripts in Bash, and Ruby.</li>
          <li><i className="fa fa-code icon"></i><b>Languages</b>: JavaScript, HTML, CSS, Python, some Ruby, and some Java. I can speak English, and Chinese and am always looking to pick up new languages programming and conversational!</li>
          <li><i className="fa fa-asterisk icon"></i><b>Others</b>: I also have experience with design tools like Sketch and PhotoShop, and write tests using Mocha, Chai, Jasmine, Karma, and so forth. Have used Continous Integration tools such as CircleCi and TravisCi.</li>
        </ul>
      </section>
      <section className='blurb'>
        <h3>Education</h3>
        <ul className='align-text-right'>
          <li><i className="fa fa-graduation-cap icon"></i>B.A. Sociology: University of California, San Diego</li>
          <li><i className="fa fa-desktop icon"></i>Hack Reactor SF, Cohort 48</li>
        </ul>
      </section>
      <section style={{'textAlign':'center'}}>
        <p>If you've gotten this far here's a PDF of my more traditional looking <a className='link' href='https://drive.google.com/file/d/0B4BznQMywen9M1YzVEpNQUpnY0k/view?usp=sharing' target='_blank'>Resume</a>.</p>
        <p>Connect with me on <a className='link' href='https://www.linkedin.com/in/shermanchen410' target='_blank'>LinkedIn</a>!</p>
      </section>
      <Footer />
    </main>
  )
};

export default Resume;
