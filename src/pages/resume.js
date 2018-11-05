import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import resume from '../images/resume.pdf'

// import { Document, Page } from 'react-pdf'

const Resume = () => (
  <Layout>
    <div className='headerz'>
    <Link className="button" to="/">
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
      seamless
    />
  </Layout>
)

export default Resume

