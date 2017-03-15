import { h } from 'preact';
import Header from './Header';
import Footer from './Footer';

const Projects = () => {
  return (
    <main className="flex-wrapper">
      <Header />
      <section className='blurb'>
      <h1 tabindex="1">Here are some of my past Projects</h1>
      <p className='border-bottom'>I built these both to learn and practice modern Software Engineering and Development. Of course they were also fantastically fun to make!</p>
      </section>
      <section className="blurb border-bottom">
        <h3 tabindex="2"><i className="fa fa-universal-access icon" aria-hidden="true"></i>Raging Octopus</h3>
        <p>"Accessibility-driven OpenTable Integration"</p>
        <iframe width="100%" height="100%" className='video' src="https://www.youtube.com/embed/B-QZrLoA2aQ?t=50m44s" frameBorder="0" allowFullScreen></iframe>
        <p><em>(starts at 50:44)</em></p>
        <p className='align-text-right'><b>What I built</b>: Raging Octopus was an accessibility-driven integration built on top of the OpenTable API, it allows impaired users (i.e. blindness, physical, etc) users to interact with and use OpenTable through voice commands.</p>
        <p><b>What I learned</b>: We built this project because we care about equal web accessibility for all users, I learned a lot about how to create a product for all different kinds of users, and how to utilize alternative web browsing methods, i.e. voice commands.</p>
        <p><b>What I am most proud of</b>: It was great that we placed, but personally, I was really proud of our idea and the motivation for building the application. We are all a11y <i className="fa fa-heart" style={{color: "red"}}></i>.</p>
        <p><em>Built with: React, jQuery, Node, Express, AWS, Serverless, & OpenTable API</em></p>
      </section>
      <section className="blurb border-bottom">
        <h3 tabindex="3"><i className="fa fa-file-code-o icon" aria-hidden="true"></i>CodeOff</h3>
        <p>"Gamified Online Coding Platform"</p>
        <p><em>Demo Recording currently in progress</em></p>
        <img src="http://res.cloudinary.com/meetshermanchen-com/image/upload/v1486015920/codeoff_nhme5b.png" alt="CodeOff demo recording in progress!"/>
        <p>It's on <a href="https://github.com/oneoffcharacters/CodeOff" className="link" target='_blank'>GitHub</a>.</p>
        <p tabindex="4"><b>What I built</b>: CodeOff is a web application that allows users to pair up and engage in competitve coding challenges. What set it apart from others was the ability to fire off "power ups" (think Mario-Kart) to distract your opponent and increase your chances of winning!</p>
        <p><b>What I learned</b>: The big thing I learned over the development of CodeOff was the huge impact that properly planning out sprints make, technical debt is a real and scary thing! Technology-wise I learned a lot about React, React-router, WebSockets, Continous Integration, and Microservices.</p>
        <p><b>What I am most proud of</b>: It was a challenge to get the websocket connections hookedup so that the players could interact with each other in different capacities, i.e. competitors had access to powerups, while viewers were restricted to viewing only. We also had to figure out how to get competitors code tested, and ultimately we accomplished this by exporting their submissions to a temp file, running Mocha CLI on it, and then importing the results to a containerized testing API which our main server then interacted with.</p>
        <p><b>What I would do better next time</b>: I would have definitely taken more time to plan out the architecture of the application. Also I would have standardized the groups CSS's rules and styleguide more strictly.</p>
        <p><em>Built with: React, jQuery, Node, Express, MongoDB, Socket.io, Mocha CLI, Docker, & Webpack.</em></p>
      </section>
      <section className="blurb border-bottom">
        <h3 tabindex="5"><i className="fa fa-cutlery icon" aria-hidden="true"></i>Meal.next</h3>
        <p>"Mobile all-in-one recipe finder"</p>
        <iframe width="100%" height="100%" className='video' src="https://www.youtube.com/embed/tx7B8MA7wyU" frameBorder="0" allowFullScreen></iframe>
        <p>It's on <a href="https://github.com/todaysjam/legacy" className="link" target='_blank'>GitHub</a>.</p>
        <p className='align-text-right' tabindex="5"><b>What I built</b>:Meal.Next is a mobile app that helps users find and plan out their week's meals.</p>
        <p><b>What I learned</b>: This was my first project where I mainly interacted with legacy code. It was an experience in itself learning how to read and decipher someone else's code, and then planning and adding new features to the already existing product.</p>
        <p><b>What I am most proud of</b>:We were able to completely overhaul the UI/UX and make it more friendly, easy, and intuitive to interact with. We also added several new features to better personalize the app for the user such as a calorie counter and shopping list. During this project I realized how much I enjoyed creating beautiful UI/UX (I designed the branding and color scheme!), and it definitely brought out a genuine enjoyment in me for Frontend Engineering.</p>
        <p><b>What I would do better next time</b>: The initial struggle I had with this project was not being used to another team's coding style and project layout/structure. I would definitey have taken more time to understand the way they architectured their application, instead of just diving into planning new features to add.</p>
        <p><em>Built with: React Native, Exponent, Native Base, Node, Express, & MongoDB.</em></p>
      </section>
      <section className="blurb border-bottom">
        <h3 tabindex="6"><i className="fa fa-trophy icon" aria-hidden="true"></i>Jamz</h3>
        <p>“Mobile accountability checker and activity tracker”</p>
        <iframe width="100%" height="100%" className='video' src="https://www.youtube.com/embed/SgTgcXYEDLY" frameBorder="0" allowFullScreen></iframe>
        <p>It's on <a href="https://github.com/todaysjam/todaysjam" className="link" target='_blank'>GitHub</a>.</p>
        <p tabindex="7"><b>What I built</b>: Jamz is a mobile app which allowed user to set and achieve goals, either individually or in a group.</p>
        <p><b>What I learned</b>: This was my first time developing a mobile application and it was quite the adventure learning how to think in terms of developing something for a mobile device (i.e. how users interact with it, how is security different from a web app, etc.). I spent a quite a bit of time learning React Native and the Exponent framework as well.</p>
        <p><b>What I am most proud of</b>:This was my first time working in a group setting, we followed Agile methodology and practices, specifically the SCRUM style, and were able to effectively plan out sprints and execute on them. I was Product Owner for the development cycle and was able to convey and guide the idea into reality.</p>
        <p><b>What I would do better next time</b>: Looking back I would have definitely scaled back on the ideation of the application as we initially set our goals way too high. It was a good experience learning how to manage sprints.</p>
        <p><em>Built with: React Native, Exponent, Node, Express, & MongoDB.</em></p>
      </section>
      <section className="blurb border-bottom">
        <h3 tabindex="8"><i className="fa fa-male icon" aria-hidden="true"></i>Tennis Buddy</h3>
        <p>"Social Network for Tennis Ethusiasts"</p>
        <img src="http://res.cloudinary.com/meetshermanchen-com/image/upload/v1486015937/tennisbuddy_ea4sik.png" alt="Tennis Buddy the easiest way to play tennis with a buddy!"/>
        <p>It's on <a href="https://github.com/Sherman-Chen/TennisBuddy" className="link" target='_blank'>GitHub</a>.</p>
        <p tabindex="9"><b>What I built</b>: I had 24 hours to complete this project. I pretty much built a login/logout feature and hashed users passwords, I was way over my head in wanting to develop an entire social network in only a day!</p>
        <p><b>What I learned</b>: Rapid prototyping is an essential in this industry. If there are scaffolding tools available (ahem Yeoman, Create-React-App, etc.) you should probably use them to save yourself time!</p>
        <p><b>What I am most proud of</b>: I mean, I survived the 24 hours and got some much needed humbling and experience in software engineering. That login panel is pretty nifty too.</p>
        <p className='align-text-right'><b>What I would do better next time</b>: Everything.</p>
        <p><em>Built with: Angular, Node, MaterializeCSS, Express, & MongoDB.</em></p>
      </section>
      <section className="blurb">
        <p tabindex="10">Thanks for checking out some of the stuff I've built! Here's a link to my <a href="https://www.github.com/Sherman-Chen" target='_blank' className="link">GitHub</a> for other projects I've done.</p>
      </section>
      <Footer />
    </main>
  )
};

export default Projects;
