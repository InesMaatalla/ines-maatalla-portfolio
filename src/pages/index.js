import React from 'react'
import HeroSection from "../components/HeroSection"
import Projects from "../components/Project"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Stacks from "../components/Stack"


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
