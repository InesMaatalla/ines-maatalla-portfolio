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
                        <br></br>
                        <p className="para">Actually, doing a BAC+4 as a Designer and Developer of Applications 
                            at ENI Informatique in France. Assisting some courses as
                            Java, PHP, C#, Oracle, Eclipse, Wordpress, SQLServer, Symfony,
                            Ionic, Hibernate, Tomcat, Android, Xamarin, ASP, UML, WAMP Server,
                            Spring, JPA, Swing, SCRUM, CDM. 
                        </p>
                        <br></br>
                        <p className="para"> Learned Full Stack Web Development at Le Wagon : 
                            CSS, HTML, Javascript, Bootstrap, JQuery, MySQL,
                            Git, GitHub, Heroku, Figma, Ruby on Rails.
                        </p>
                        <br></br>
                        <p className="para">
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
                    <h3>Programing Languages</h3>
                    <p> Ruby on Rails, Java, PHP, C#, ASP</p>
                </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Web Development</h3>
                        <p>HTML, CSS, Javascript</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Frameworks / Platforms</h3>
                        <p>React, Tomcat, Symfony, JQuery, Bootstrap, Spring, JPA, Hibernate, Xamarin, Ionic, Swing, Stripe, ContextAPI, Cloudinary</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>DataBases</h3>
                        <p>GraphQL, PostgreSQL, SQL Server, Oracle, MySQL, Firebase, Oracle</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Softwares</h3>
                        <p>Sublime text, Visual Studio Code, GitHub, Git, Gatsby, Figma, Heroku, Netlify, Eclipse, Wordpress</p>
                    </div>
                <div className="stack">
                        <FcApproval className="icon-1"/>
                        <h3>Operating System</h3>
                        <p>Mac, Windows, Android</p>
                    </div>
                <div className="stack">
                    <FcApproval className="icon-1"/>
                    <h3>Realisation</h3>
                    <p> Event organization website: PHP, Symfony, Javascript, MySQL, WAMP Server</p>
                    <p> Auction website : Java EE, SQLServer, Tomcat</p>
                    <p> E-commerce app : with Udemy to learn React</p>
                    <p> Portfolio : Gatsby, React, Netlify </p>
                    <p> Papelitos : UI / UX Design, Ruby on Rails</p>
                    <p> Airbnb clone : Ruby on Rails, Heroku</p>
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