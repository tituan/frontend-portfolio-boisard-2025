import Image from "next/image";

const projects = [
  {
    title: "Altarea Solutions & Services",
    img: "/img/realisations-item-02.jpg",
    alt: "Altarea Solution & services",
    link: "https://www.altarea-solutions-services.com/",
    description:
      "Plateforme présentant l'offre de services immobiliers (gestion de patrimoine, investissement) pour le groupe Altarea.",
    // isModal: true, // pour l’exemple, uniquement ce projet avait un lien modal 
  },
  {
    title: "Volkswagen - E-mobilite",
    img: "/img/realisations-item-05.jpg",
    alt: "Volkswagen E-mobilité",
    link: "https://nouvelles-mobilites-vwfs.fr/",
    description:
      "Développement du site présentant l'offre de mobilité du groupe Volkswagen (location longue durée, flottes entreprises).",
  },
  {
    title: "Ogic Patrimoine",
    img: "/img/ogic-patrimoine.png",
    alt: "Ogic Patrimoine",
    link: "https://www.ogic-patrimoine.fr/login",
    description:
      "Espace professionnel offrant une visibilité complète sur le catalogue de biens et les disponibilités de lots pour les partenaires.",
  },
//   {
//     title: "Altarea Patrimoine",
//     img: "/img/altarea-patrimoine.png",
//     alt: "Altarea Patrimoine",
//     link: "https://www.altarea-patrimoine.com/",
//     description:
//       "Développement de la solution dédiée à la gestion de patrimoine immobilier pour les clients particuliers du groupe Altarea.",
//   },
  {
    title: "Edouard Denis",
    img: "/img/edouard-denis.png",
    alt: "Edouard Denis",
    link: "https://edouarddenis-immobilier.com/",
    description:
      "Refonte et maintenance évolutive du site du promotteur immobilier Edouard Denis.",
  },
];

export default function Project() {
  return (
    <div id="project" className="project">
      <div className="project__container">
        <p className="patchTxt">Projets</p>
        
        <p className="project__description">
        En tant que développeur web front-end au sein d'une agence de communication, j'ai contribué à la réalisation de projets variés allant des sites vitrines haut-de-gamme aux plateformes interactives. Mon rôle a principalement consisté à :
        </p>
        <ul className="project__list">
            <li>Développer des interfaces modernes et réactives</li>
            <li>Optimiser l'expérience utilisateur grâce à des animations fluides et des parcours intuitifs</li>
            <li>Assurer la qualité technique (SEO, accessibilité, performances)</li>
        </ul>

        <div className="project__wrapper">
          {projects.map((proj, i) => (
            <div className="item" key={proj.title}>
              <div className="item__top">
                <Image
                  src={proj.img}
                  alt={proj.alt}
                  width={500}
                  height={500}
                  className="item__top__pic__img"
                />
                {proj.isModal && (
                  <div className="item__top__action">
                    <div
                      className="item__top__action__btn js-video-play js-modal-open"
                      data-modal={`video-${i}`}
                    >
                      {/* icon */}
                    </div>
                  </div>
                )}
              </div>
              <div className="item__content">
                <p className="item__content__title">{proj.title}</p>
                <p className="item__content__description">{proj.description}</p>
                <a
                  href={proj.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="item__content__link"
                >
                  Accéder au site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
