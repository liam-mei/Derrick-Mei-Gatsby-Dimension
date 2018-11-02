import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-laptop"></span>
            
        </div>
        <div className="content">
            <div className="inner">
                <h1>Derrick Mei Dimension</h1>
                {/* <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p> */}
                <ul className="icons">
                    <li><a href="/resume/" class="icon fa-file-pdf-o"><span class="label">Resume</span></a></li>
                    <li><a href="https://github.com/Derrick-Mei/" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="https://www.linkedin.com/in/derrick-mei/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
