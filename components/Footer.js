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
        <h3>Éditeur du site :</h3>
        <p>Antoine Boisard</p>
        <p>Contact : <a href="mailto:antoine.boisard8@gmail.com">antoine.boisard8@gmail.com</a></p>
        <p>Site personnel de présentation de projets web et photographiques.</p>

        <h3>Hébergement :</h3>
        <p>Le site est hébergé par :</p>
        <p>Vercel Inc.<br />
        440 N Barranca Ave #4133<br />
        Covina, CA 91723<br />
        États-Unis<br />
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></p>

        <h3>Nom de domaine :</h3>
        <p>Nom de domaine enregistré auprès de :</p>
        <p>OVH SAS<br />
        2 rue Kellermann<br />
        59100 Roubaix<br />
        France<br />
        <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer">https://www.ovh.com</a></p>

        <h3>Responsable de la publication :</h3>
        <p>Antoine Boisard</p>
        <p>Contact : <a href="mailto:antoine.boisard8@gmail.com">antoine.boisard8@gmail.com</a></p>

        <h3>Propriété intellectuelle :</h3>
        <p>L’ensemble du contenu (textes, images, photographies, logos, éléments graphiques, etc.) est la propriété exclusive d’Antoine Boisard sauf mention contraire. Toute reproduction, représentation, modification ou exploitation est interdite sans l’accord préalable de l’auteur.</p>

        <h3>Protection des données personnelles :</h3>
        <p>Aucune donnée personnelle n’est collectée ou exploitée sur ce site sans le consentement explicite de l’utilisateur.</p>

        <h3>Cookies et traçage :</h3>
        <p>Ce site utilise des outils de mesure d’audience via Google Analytics (GA4).<br />
        L’utilisateur peut configurer son navigateur pour refuser tout ou partie des cookies.</p>
        <button onClick={() => setModalIsOpen(false)}>Fermer</button>
      </Modal>
    </footer>
  );
}
