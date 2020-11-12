import HeroSection from "../components/HeroSection"
import Projects from "../components/Projects"
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
