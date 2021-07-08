import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import HeroSection from "../components/HeroSection/HeroSection"
import Image from "../components/Image/Image"
import "../components/Image/Image.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Ines Maatalla - Home Page" />
    <HeroSection/>
    <Image/>
  </Layout>
)

export default IndexPage