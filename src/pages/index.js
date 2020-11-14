import React from 'react'
import Stacks from "../components/stacks"
import SEO from "../components/seo"
import HeroSection from "../components/herosection"
import Projects from "../components/projects"
import Layout from "../components/layout"
import Footer from "../components/footer"


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