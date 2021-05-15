import React from 'react'
import './Stack.css'
import { FcSearch, FcApproval} from 'react-icons/fc'
import { useStaticQuery, graphql } from 'gatsby'
import Images from "gatsby-image"


const Stack = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    ext: { regex: "/(jpg)|(png)|(jpeg)/"}
                    name: { in: ["me","coding"] } 
                }
            ) {
                edges {
                    node {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    
                }
            }
        }
    `)

    return (
        <div className="stack-container">
            <p className="top-line">
                [Stacks]
            </p>
            <p className="description">
                Languages and Frameworks
            </p>
            <div className="content-wrapper">
                <div className="column-one"> 
                    <div className="stack">
                        <FcSearch className="icon-2"/>
                        <h3>//Ines</h3>
                        <p>Learned Full Stack Web Development at Le Wagon.
                            Looking for a position to assist me in developing, 
                            improving and obtaining the necessary skills in a challenging 
                            and creative environment that utilizes team work 
                            and encourages learning and development.
                        </p>
                    </div>
                </div>
                <div className="column-two">
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid} className="photo" />
                ))}
                </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Front End Development</h3>
                        <p>HTML5, CSS3, Javascript, SASS </p>
                    </div>
                    <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Back End Development</h3>
                        <p>Ruby on Rails, Java, PHP, C#</p>
                    </div>
                    <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Frameworks</h3>
                        <p>Rails, Symfony, Bootstrap, React JS, Angular, Ionic, Spring, Hibernate</p>
                    </div>
                    <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>DataBase</h3>
                        <p>GraphQL, PostgreSQL, SQL Server, Oracle, MySQL, Firebase</p>
                    </div>
                    <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>API</h3>
                        <p>Stripe, ContextAPI, Cloudinary, JPA</p>
                    </div>
                    <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Other tools</h3>
                        <p>Git, GitHub, Heroku, Netlify, Figma, Gatsby, </p>
                    </div>
            </div>
        </div>
    )
}
export default Stack;