import React from "react"
import Layout from "../components/Layout/layout"
import "../../src/components/Layout/layout.css"
import SEO from "../components/SEO/seo"
import Destination from "../components/Destination/Destination"
import "../components/Destination/Destination.css"


const Destinations = () => (
  <Layout>
    <SEO title="Destinations" />
    <Destination/>
  </Layout>
)

export default Destinations;