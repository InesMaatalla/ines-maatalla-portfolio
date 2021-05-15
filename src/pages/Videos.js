import React from "react"
import Video from "../components/Video"
import "../components/Video.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../../src/components/layout.css"

const Videos = () => (
  <Layout>
    <SEO title="Videos" />
    <Video/>
  </Layout>
)

export default Videos