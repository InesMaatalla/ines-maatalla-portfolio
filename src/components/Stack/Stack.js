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
                    name: { in: ["mee","coding"] } 
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
                        <br></br>
                        <p>Actually, doing a BAC+4 as a Web Developer 
                            at ENI Informatique in France. 
                        </p>
                        <br></br>
                        <p>
                            Looking for a an internship in November.
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
                    <h3>Languages</h3>
                    <p> Ruby on Rails, Java, PHP, C#, HTML, CSS, JavaScript</p>
                </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Environments</h3>
                        <p>Netbeans, Eclipse, IntelliJ, WebStorm, PHPStorm, Android Studio</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Frameworks / Platforms</h3>
                        <p>React, Tomcat, Symfony, JQuery, Bootstrap, Spring, JPA, Hibernate, Xamarin, Ionic, Swing, Angular, Admin Apache, Linux</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>CMS</h3>
                        <p>Wordpress</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Methods</h3>
                        <p>Oracle CDM, Scrum, UML</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>DataBases</h3>
                        <p>MySQL, SQLServer, Oracle</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>OS</h3>
                        <p>Mac, Windows, Android</p>
                </div>
                <div className="stack">
                    <FcApproval className="icon-1"/>
                    <h3>Realisation</h3>
                    <p> Event organization website: PHP, Symfony, Javascript, MySQL, WAMP Server</p>
                    <p> Auction website : Java EE, SQLServer, Tomcat</p>
                </div>
        
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Modelisation</h3>
                        <p>UI / UX Design, Video Editing (GoPro)</p>
                    </div>
                
            </div>
        </div>
    )
}
export default Stack;