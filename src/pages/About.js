import React from "react"
import "../../src/components/Layout/layout.css"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import Aboutme from "../components/About/Aboutme"
import "../components/About/Aboutme.css"

import Cards from "../components/Cards/Cards"
import Stack from "../components/Stack/Stack"


const About = () => (
  <Layout>
    <SEO title = "About" />
    <Aboutme/>
    <Stack/>
    <Cards />
  </Layout>
)

export default About