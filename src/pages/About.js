import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Aboutme from "../components/Aboutme"
import "../components/Aboutme.css"


const About = () => (
  <Layout>
    <SEO title="About" />
    <Aboutme/>
  </Layout>
)

export default About