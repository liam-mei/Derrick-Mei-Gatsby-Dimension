import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.svg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <div>
					<h3>Falcano</h3>
					<p>An app to log your required flight experience to qualify for a pilot license. Users can create aircraft and instructors and
            log flights with that data. Flight logs are broken down into 12 different fields needed to be completed to qualify for the license.
            The data is highly relational and we used PostgreSQL so that changing the data on a particular 
             on that specific aircraft with a  employers with developers. Developers can post a profile and search through potential job
						listings created by employers. Employers can search for developers by a variety of filtering options including
						location, languages, etc. This was a group project in which I focused on the front end styling and animations.</p>
					<p>Tech Stack: React, PostgreSQL, Django</p>
					<button><a href='https://falcano.app'>View Project</a></button><button><a href='https://github.com/Lambda-School-Labs/CS10-Developer-Profiles'>Github</a></button>
				</div>
				<br />
				<div>
					<h3>Nate's Coding Codex</h3>
					<p>A blog that I recently started. Feel free to take a peek if you're interested.</p>
					<p>Tech Stack: GatsbyJS, React</p>
					<button><a href='https://natescodingcodex.netlify.com/'>View Project</a></button><button><a href='https://github.com/Nate152/GatsbyBlog'>Github</a></button>
				</div>
				<br />
				<div>
					<h3>S & J Architects</h3>
					<p>This was a mock website that I built to show off some of the animation libraries I was working with at the
						time. It showcases Greensock Animation platform and Animate on Scroll in particular.</p>
					<p>Tech Stack: HTML, CSS, LESS, GSAP</p>
					<button><a href='https://sandjarchitectsnateflory.netlify.com/'>View Project</a></button><button><a href='https://github.com/Nate152/User-Interface-Project-Week'>Github</a></button>
				</div>
				<br />
				<div>
					<h3>Lambda Times</h3>
					<p>This was a mock news article website that I built to show off some of the skills I was learning at the time. It showcases
						DOM manipulation using vanilla JavaScript, including a carousel and filtering of articles.</p>
					<p>Tech Stack: JavaScript, HTML, CSS, LESS</p>
					<button><a href='https://lambdatimesnateflory.netlify.com/'>View Project</a></button><button><a href='https://github.com/Nate152/Lambda-Times'>Github</a></button>
				</div>
				<br />
				<div>
					<h3>Oviedo Premier Dental</h3>
					<p>This is a project I am currently working on. It is a website for a dental office that sorely needed an update.
						I
						am primarily using React with components from Material UI. Check back for more updates soon.</p>
					<button><a href='https://github.com/Nate152/OviedoPremierDental'>Github</a></button>
				</div>
          {close}
        </article>

        <article id="experience" className={`${this.props.article === 'experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Experience</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Proficiency with JavaScript, HTML, CSS, LESS, SaSS, React/Redux, Bootstrap, GatsbyJS, Material UI, GSAP, NodeJS, Express,
					and many more!</p>
				<h3>Full Stack Web Developer</h3>
				<h4>Lambda School</h4>
				<ul>
					<li>Completed work including; React, React Native, Redux, NodeJS, Express, MongoDB, Mocha, Chai, Python, Django.</li>
					<li>Utilized agile software development and Gitwork flow on all projects.</li>
					<li>Gained experience working with clients and understanding client demands by collaborating on full life cycle
						projects</li>
					<li>Hands on experience with client and server testing, paired programming, and CS fundamentals</li>
				</ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/derrick.mei.168@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="../images/Derrick-Mei-Resume.pdf" class="icon fa-file-pdf-o"><span class="label">Resume</span></a></li>
            <li><a href="https://github.com/Derrick-Mei/" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/derrick-mei" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main