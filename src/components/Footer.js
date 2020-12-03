import React from 'react';
import './Footer.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              EXPLORE <i class='fas fa-angle-double-down' />
            </Link>
          </div>
          <small class='website-rights'>EXPLORE © 2020 Ines Maatalla </small>
          <div class='social-icons'>
            <Link
              class='social-icon-link mail'
              to='mailto:Ines.Maatalla@hotmail.fr'
              target='_blank'
              aria-label='Mail'
            >
            <FontAwesomeIcon icon={faEnvelopeSquare} />
            </Link>
            <Link
              class='social-icon-link github'
              to='https://github.com/InesMaatalla'
              target='_blank'
              aria-label='GitHub'
            >
            <FontAwesomeIcon icon={faGithubSquare} />
            </Link>
            <Link
            class='social-icon-link linkedin'
            to='https://www.linkedin.com/in/ines-maatalla/'
            target='_blank'
            aria-label='Linkedin'
          >
          <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;