import React from 'react'
import Stacks from "../components/Stacks"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import Footer from "../components/Footer"


const IndexPage = () => (
    <Layout>
     <SEO title="Home" />
        <HeroSection></HeroSection>
        <Projects/>
        <Stacks/>
        <Footer/>
    </Layout>
)

export default IndexPage