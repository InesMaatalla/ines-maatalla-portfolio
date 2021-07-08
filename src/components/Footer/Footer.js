import React from 'react';
import './Footer.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaAngleDoubleDown } from "react-icons/fa"




function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            
            </Link>
          </div>
          <small class='website-rights'>COPYRIGHT {new Date().getFullYear()} © INES MAATALLA </small>
          <div class='social-icons'>
            <Link
              class='social-icon-link mail'
              to='mailto:Ines.Maatalla@hotmail.fr'
              target='_blank'
              aria-label='Mail'
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link
              class='social-icon-link github'
              to='https://github.com/InesMaatalla'
              target='_blank'
              aria-label='GitHub'
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
            class='social-icon-link linkedin'
            to='https://www.linkedin.com/in/ines-maatalla/'
            target='_blank'
            aria-label='Linkedin'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
            class='social-icon-link youtube'
            to='https://www.youtube.com/channel/UCfb7AoH-CUfOUI9zsFZiMRA/featured'
            target='_blank'
            aria-label='Youtube'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link> 
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;