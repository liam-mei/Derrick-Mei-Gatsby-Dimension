import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import resume from '../images/resume.pdf'

// import { Document, Page } from 'react-pdf'

const Resume = () => (
  <Layout>
    <div className="headerz">
      <Link className="button homeButton" to="/">
        Home
      </Link>

      <a className="button" href={resume} download="DerrickMei">
        <i class="fa fa-download" />
        Download
      </a>
    </div>
    <iframe
      src="https://resume.creddle.io/embed/6agspcn5hmv"
      width="850"
      height="1100"
      title="resume"
      seamless
    />
    <div>asd;lfkasjd;flkj;</div>
    <object
      data={resume}
      width="850"
      height="1130"
      type="application/pdf"
      scrolling="yes"
    >
      <iframe title="resume" src={resume} scrolling="yes" seamless>
        This browser does not support PDFs. Please download the PDF to view it:
        <a href={resume} download="">
          Download PDF
        </a>
      </iframe>
    </object>
  </Layout>
)

export default Resume
