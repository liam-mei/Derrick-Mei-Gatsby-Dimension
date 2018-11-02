import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import resume from '../images/resume.pdf'

// import { Document, Page } from 'react-pdf'

const SecondPage = () => (
  <Layout>
    {/* <img src="https://resume.creddle.io/resume/6agspcn5hmv" alt="" /> */}
    {/* <embed
      src="https://resume.creddle.io/resume/6agspcn5hmv"
      style={{width: "100vw",height: "100vh",border: "none"}}
    /> */}
    <iframe
      src="https://resume.creddle.io/embed/6agspcn5hmv"
      width="850"
      height="1100"
      seamless
    />

    {/* <Document file={resume}>
    <Page pageNumber='1' />
  </Document> */}

    <Link className="button" to="/">
      Home
    </Link>

    <a className="button" href={resume} download="DerrickMei">
      <i class="fa fa-download" />
      Download
    </a>
  </Layout>
)

export default SecondPage
