import Image from "next/image";

const projects = [
  {
    title: "Altarea Solutions & Services",
    img: "/img/realisations-item-02.jpg",
    alt: "Altarea Solution & services",
    link: "https://www.altarea-solutions-services.com/",
    description:
      "Plateforme présentant l'offre de services immobiliers (gestion de patrimoine, investissement) pour le groupe Altarea.",
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
  {
    title: "Edouard Denis",
    img: "/img/edouard-denis.png",
    alt: "Edouard Denis",
    link: "https://edouarddenis-immobilier.com/",
    description:
      "Refonte et maintenance évolutive du site du promotteur immobilier Edouard Denis.",
  },
];

const projectsPerso = [
  {
    title: "Bureau d'études Capsol",
    img: "/img/capsol-portfolio.png",
    alt: "Capsol",
    link: "https://be-capsol.com/",
    description:
      "Conception complète du projet Capsol, de la création de l'identité visuelle au développement du site web responsive.",
  },
  {
    title: "Kiddiz",
    img: "/img/kiddiz-portfolio.png",
    alt: "Kiddiz APP",
    link: "#",
    description:
      "Kiddiz est une application dédiée à la revente de jouets et équipements pour enfants de 0 à 14 ans, entre particuliers.",
  },
];

export default function Project() {
  return (
    <div id="project" className="project">
      <div className="project__container">
        <p className="project__title">Du design à la production</p>
        <p className="project__description">
          En tant que développeur web front-end, j&rsquo;ai eu l&rsquo;occasion de mener à bien une grande variété de projets, aussi bien dans un cadre professionnel que personnel. J&rsquo;ai notamment travaillé sur des sites vitrines, des plateformes interactives ainsi que des applications mobiles.
        </p>
        <ul className="project__list">
          <li>Développer des interfaces modernes et réactives</li>
          <li>Optimiser l&rsquo;expérience utilisateur grâce à des animations fluides et des parcours intuitifs</li>
          <li>Assurer la qualité technique (SEO, accessibilité, performances)</li>
        </ul>

        <p className="patchTxt">Projets Agence</p>
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
                    ></div>
                  </div>
                )}
              </div>
              <div className="item__content">
                <p className="item__content__title">{proj.title}</p>
                <p className="item__content__description">{proj.description}</p>
                {/* <a
                  href={proj.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="item__content__link"
                >
                  Accéder au site
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <p className="patchTxt">Projets personnels</p>
        <div className="project__wrapper">
          {projectsPerso.map((proj, i) => (
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
                    ></div>
                  </div>
                )}
              </div>
              <div className="item__content">
                <p className="item__content__title">{proj.title}</p>
                <p className="item__content__description">{proj.description}</p>
                {/* <a
                  href={proj.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="item__content__link"
                >
                  Accéder au site
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
