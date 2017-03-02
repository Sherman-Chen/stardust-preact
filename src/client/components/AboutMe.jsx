import { h } from 'preact';
import Header from './Header';
import Footer from './Footer';

const AboutMe = () => {
  return (
    <main className='flex-wrapper'>
      <Header />
      <section className="blurb">
        <h1 tabindex="1">About Sherman</h1>
        <figure className="card" tabindex="2">
          <img src="http://res.cloudinary.com/meetshermanchen-com/image/upload/v1486015925/sherman_chen_n42kso.jpg" alt="The boyhood dream acheived! Finally WWE Champion of the world!"/>
          <figcaption><em>Who knows? Maybe one day it'll be the actual belt. A man can dream of his WrestleMania moment! ;D</em></figcaption>
        </figure>
        <p tabindex="2"><i className="fa fa-rocket icon"></i>Placed 2nd at Devweek 2017 Hackathon Flock Challenge! Won cash prize and gadgets! Exciting experience, looking forward to competing in more!</p>    
        <p tabindex="3"><i className="fa fa-hand-peace-o icon"></i>When not developing I can usually be found exercising, playing tennis, learning something new, listening to podcasts, or planning out my next personal project!</p>
        <p tabindex="4"><i className="fa fa-university icon"></i>I'm dedicated to being a growth-oriented person and always learning new things. Something I've been learning recently is the Python web framework Django. Something I've been listening to recently is the awesome podcast <a className="link" href="http://frontendhappyhour.com/" target="_blank">Front End Happy Hour</a>.</p>
        <p tabindex="5"><i className="fa fa-commenting icon"></i>My thoughts regarding failure and embracing it: <blockquote cite="https://www.brainyquote.com/quotes/quotes/s/samuelbeck121335.html"><em>"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better."</em><br />-Samuel Beckett</blockquote> We fail everyday in our lives, what makes the difference is the attitude and perseverance to get back up and fail better next time.</p>
        <p tabindex="6"><i className="fa fa-book icon"></i>I am a huge advocate for education reform and accessibility, having studied education, critical gender studies, and ethnic studies extensively at UCSD, and also volunteering time at local alternative education schools dedicated to serving disadvantaged and underrepresented youth.</p>
        <p tabindex="7"><i className="fa fa-coffee icon"></i>I'm always excited with meeting new people and learning from them, let's get in <a href="/contact" className="link">touch</a> sometime over coffee or a meal!</p>
      </section>
      <Footer />
    </main>
  )
}

export default AboutMe;