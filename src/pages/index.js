import React from "react"
import HeroSection from "../components/HeroSection"
import Cards from "../components/Cards"
import Stack from "../components/Stack"
import Aboutme from "../components/Aboutme"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <HeroSection />
    <Aboutme/>
    <Stack/>
    <Cards />
  </Layout>
)

export default IndexPage