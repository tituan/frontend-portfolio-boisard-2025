import Image from "next/image";

const projects = [
  {
    title: "Altarea Solutions & Services",
    img: "/img/realisations-item-02.jpg",
    alt: "Altarea Solution & services",
    link: "https://www.altarea-solutions-services.com/",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    // isModal: true, // pour l’exemple, uniquement ce projet avait un lien modal 
  },
  {
    title: "Volkswagen - E-mobilite",
    img: "/img/realisations-item-05.jpg",
    alt: "Volkswagen E-mobilité",
    link: "https://nouvelles-mobilites-vwfs.fr/",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    title: "Ogic Patrimoine",
    img: "/img/ogic-patrimoine.png",
    alt: "Ogic Patrimoine",
    link: "https://www.ogic-patrimoine.fr/login",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    title: "Altarea Patrimoine",
    img: "/img/altarea-patrimoine.png",
    alt: "Altarea Patrimoine",
    link: "https://www.altarea-patrimoine.com/",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    title: "Edouard Denis",
    img: "/img/edouard-denis.png",
    alt: "Edouard Denis",
    link: "https://edouarddenis-immobilier.com/",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];

export default function Project() {
  return (
    <div id="project" className="project">
      <div className="project__container">
        <p className="patchTxt">Projets</p>
        <p className="project__description">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
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
