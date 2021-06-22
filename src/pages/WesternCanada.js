import React from "react"
import "../../src/components/Layout/layout.css"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import WesternCanada from "../components/Destination/WesternCanada"

import "../components/Destination/Destination.css"


const WesternCanadas = () => (
  <Layout>
    <SEO title="WesternCanada" />
    <WesternCanada/>
  </Layout>
)

export default WesternCanadas;