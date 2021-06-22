import React, { useState} from 'react';
import './Destination.css';
import { useStaticQuery, graphql } from 'gatsby'
import Images from "gatsby-image"
import { Button } from "../Button/ButtonDestination"
import { Link } from 'gatsby';




function Destination() {
  
  const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    ext: { regex: "/(jpeg)/"}
                    name: { in: ["1"] } 
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

    const [setClick] = useState(false);

  
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <div className="destinations">
        <p >Adventure. Culture. Memories.</p>
        <h1 >Destinations</h1>
      </div>
          
    
      <div className="destination-container">
        <div className="destination-content-wrapper">
          <div className="destination-column-one">
            {data.allFile.edges.map((image, key) => (
              <Images key={key} fluid={image.node.childImageSharp.fluid} className="destination-photo" />
            ))}
          </div>    
          <div className="destination-column-two"> 
            <div className="destination-title">
              <h1>Western Canada</h1>
                <br></br>
                <p>Drove 13 500 km to cross this huge country to discover gorgeous places. It’s a long ride but it’s worth it. Check my video !</p>
                <Link to='/WesternCanada' className='nav-links' onClick={closeMobileMenu}>
                  <Button fontBig big primary>
                      See more
                  </Button>
                </Link>
            </div>
          </div>   
        </div> 
      </div>
    </div>
  );
}

export default Destination;