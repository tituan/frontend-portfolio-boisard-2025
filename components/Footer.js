'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Colonne 1 : Contact uniquement en icônes */}
        <div className="footer__column">
          <div className="footer__iconGroup">
            <a href="tel:+33616377154" className="footer__icon">
              <FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff', fontSize: '24px' }} />
            </a>
            <a href="mailto:antoine.boisard8@gmail.com" className="footer__icon">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ffffff', fontSize: '24px' }} />
            </a>
          </div>
        </div>

        {/* Colonne 2 : Mentions légales + copyright */}
        <div className="footer__column">
          <button className="footer__textLink" onClick={() => setModalIsOpen(true)}>
            Mentions légales
          </button>
          <p className="footer__copyright">Antoine Boisard 2025<sup>&copy;</sup></p>
        </div>

        {/* Colonne 3 : Réseaux sociaux */}
        <div className="footer__column">
          <div className="footer__iconGroup">
            <a href="https://github.com/tituan" target="_blank" rel="noopener noreferrer" className="footer__icon">
              <FontAwesomeIcon icon={faGithub} style={{ color: '#ffffff', fontSize: '24px' }} />
            </a>
            <a href="https://www.linkedin.com/in/antoine-boisard-216a0741/" target="_blank" rel="noopener noreferrer" className="footer__icon">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#ffffff', fontSize: '24px' }} />
            </a>
          </div>
        </div>

      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="footer__modal"
        overlayClassName="footer__modal__overlay"
        ariaHideApp={false}
      >
        <h2>Mentions légales</h2>
        <p>Lorem ipsum</p>
        <button onClick={() => setModalIsOpen(false)}>Fermer</button>
      </Modal>
    </footer>
  );
}
