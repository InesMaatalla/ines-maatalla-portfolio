import React from 'react'
import Stacks from "../components/Stacks"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Projects from "../components/Project"
import Footer from "../components/Footer"
import Layout from "../components/Layout"


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