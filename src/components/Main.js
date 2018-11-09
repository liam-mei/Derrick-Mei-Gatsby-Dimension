import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Layout from '../components/layout'

//Falcano Pic
import falcano from '../images/falcano.svg'
import LambdaLogo from '../images/lambdalogo3.png'
import profilePic from '../images/profilepic.jpg'

import resume from '../images/resume.pdf'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={falcano} alt="" />
          </span>
          <div>
            <h3>Falcano</h3>
            <p>
              An app to log your required flight experience to qualify for a
              pilot license. Users create aircraft and instructors and then log
              flights using that data. Flight logs are broken down into 12
              different fields needed to be completed to qualify for the
              license. The 12 different fields are aggregated by airplane flown,
              airplane license type, and overall total. Stripe payments were
              used to gate premium features while Chart.js was used to
              beautifully display the data as a premium feature. This was a
              group project in which I focused on the back-end with a focus on
              Stripe Payments.
            </p>
            <span className="bold">Tech Stack:</span>
            <span> React, PostgreSQL, Django</span>
            <div className="flexSpaceAround">
              <button>
                <a href="https://falcano.app">View Project</a>
              </button>
              <button className="githubButton">
                <a href="https://github.com/Lambda-School-Labs/CS10-flight-log">
                  Github
                </a>
              </button>
            </div>
          </div>
          <br />
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            Communictor, Teamplayer & JavaScript enthusiast, my main technical
            strengths are focused around User interface and User Experience
            leveraging the power of React, Redux, Bootstrap and traditional CSS
            to create truly unique user experiences. I have deployed back-end
            projects and APIs leveraging Node, Express, MongoDB, MySQL, and
            Sqlite3. I hold a special place in my heart for the biological
            field, and financial industries and strongly believe that combined
            with Computer Science they can solve real world problems.
          </p>
          <ul className="icons">
            {/* <li><a href={resume} class="icon fa-file-pdf-o"><span class="label">Resume</span></a></li>
                    <li><a href="/resume/" class="icon fa-file-pdf-o"><span class="label">Resume</span></a></li> */}
            <li>
              <a
                href="https://github.com/Derrick-Mei/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/derrick-mei/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          <img className="profilePic" src={profilePic} alt="" />
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          {/* <span className="image main"><img className="lambdalogo" src={LambdaLogo} alt="" /></span>
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
        </ul> */}
          {/* <div className="iframe-container">
            <iframe
              src="https://resume.creddle.io/embed/6agspcn5hmv"
              width="850"
              height="1150"
              title="resume"
              seamless
            />
          </div> */}
          {/* <Layout> */}
          <object
            data={resume}
            width="850"
            height="1130"
            type="application/pdf"
          >
            <iframe title="resume" src={resume} scrolling="no" seamless>
              This browser does not support PDFs. Please download the PDF to
              view it:
              <a href={resume} download="">
                Download PDF
              </a>
            </iframe>
          </object>
          {/* </Layout> */}
          <div>
            {/* <Link className="button" to="/">
      Home
    </Link> */}

            <a className="button" href={resume} download="DerrickMei">
              <i class="fa fa-download" />
              Download
            </a>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            method="post"
            action="https://formspree.io/derrick.mei.168@gmail.com"
          >
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
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href={resume} class="icon fa-file-pdf-o">
                <span class="label">Resume</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Derrick-Mei/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/derrick-mei"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
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
