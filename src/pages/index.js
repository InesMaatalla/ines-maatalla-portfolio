// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from "react"
import HeroSection from "../components/HeroSection"
import Cards from "../components/Cards"
import Stack from "../components/Stack"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <HeroSection />
    <Cards />
    <Stack/>
  </Layout>
)

export default IndexPage