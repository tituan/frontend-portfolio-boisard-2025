import Link from 'next/link';
import Image from "next/image";

export default function Project() {
  return (
    <div id="project" className="project">
        <div className="project__container">
            <p className="patchTxt">Projets</p>
            <p className="project__description">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="project__wrapper">
                <div className="item">
                    <a href="#modal" className="item__top">
                        <picture className="item__top__pic">	
                            {/* <img src="dist/img/realisations-item-02.jpg" alt="Altarea Solution & services" className="item__top__pic__img"> */}
                        </picture>
                        <div className="item__top__action">
                            <div className="item__top__action__btn js-video-play js-modal-open" data-modal="video-0">
                                {/* <svg className="icon">
                                    <use xlink:href="#icon-play"></use>
                                </svg> */}
                            </div>
                            
                        </div>
                    </a>
                    <div className="item__content">
                        <p className="item__content__title">Altarea Solutions & Services</p>
                        <p className="item__content__description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <a href="https://www.altarea-solutions-services.com/" rel="noopener noreferrer" target="_blank" className="item__content__link">Accéder au site</a>
                    </div>
                </div>
                <div className="item">
                    <div className="item__top">
                        <picture className="item__top__pic">	
                            {/* <img src="dist/img/realisations-item-05.jpg" alt="Volkswagen E-mobilité" className="item__top__pic__img"> */}
                        </picture>
                    </div>
                    <div className="item__content">
                        <p className="item__content__title">Volkswagen - E-mobilite</p>
                        <p className="item__content__description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <a href="https://nouvelles-mobilites-vwfs.fr/" rel="noopener noreferrer" target="_blank" className="item__content__link">Accéder au site</a>
                    </div>
                </div>
                <div className="item">
                    <div className="item__top">
                        <picture className="item__top__pic">	
                            {/* <img src="dist/img/ogic-patrimoine.png" alt="Ogic Patrimoine" className="item__top__pic__img"> */}
                        </picture>
                    </div>
                    <div className="item__content">
                        <p className="item__content__title">Ogic Patrimoine</p>
                        <p className="item__content__description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <a href="https://www.ogic-patrimoine.fr/login" rel="noopener noreferrer" target="_blank"  className="item__content__link">Accéder au site</a>
                    </div>
                </div>
                <div className="item">
                    <div className="item__top">
                        <picture className="item__top__pic">	
                            {/* <img src="dist/img/altarea-patrimoine.png" alt="Altarea Patrimoine" className="item__top__pic__img"> */}
                        </picture>
                    </div>
                    <div className="item__content">
                        <p className="item__content__title">Altarea Patrimoine</p>
                        <p className="item__content__description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <a href="https://www.altarea-patrimoine.com/" rel="noopener noreferrer" target="_blank" className="item__content__link">Accéder au site</a>
                    </div>
                </div>
                <div className="item">
                    <div className="item__top">
                        <picture className="item__top__pic">	
                            {/* <img src="dist/img/edouard-denis.png" alt="Altarea Patrimoine" className="item__top__pic__img"> */}
                        </picture>
                    </div>
                    <div className="item__content">
                        <p className="item__content__title">Edouard Denis</p>
                        <p className="item__content__description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <a href="https://edouarddenis-immobilier.com/" rel="noopener noreferrer" target="_blank" className="item__content__link">Accéder au site</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}