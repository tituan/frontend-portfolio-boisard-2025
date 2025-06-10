import Link from 'next/link';
import Image from "next/image";

export default function Skill() {
  return (
    <div id="skill" className="skill">
        <div className="skill__container">
            <p className="patchTxt">compétences</p>
            <div className="skill__category">
                <h3 className="skill__category__title">
                    Languages
                </h3>
                <div className="skill__category__list">
                    <div className="skill__category__list__text">
                        Html
                    </div>
                    <div className="skill__category__list__text">
                        CSS / SCSS (Sass)
                    </div>
                    <div className="skill__category__list__text">
                        Javascript
                    </div>
                    <div className="skill__category__list__text">
                        PHP
                    </div>
                    <div className="skill__category__list__text">
                        Twig
                    </div>
                </div>
            </div>
            <div className="skill__category">
                <h3 className="skill__category__title">
                Frameworks & Librairies
                </h3>
                <div className="skill__category__list">
                    <div className="skill__category__list__text">
                        React
                    </div>
                    <div className="skill__category__list__text">
                        React Native
                    </div>
                    <div className="skill__category__list__text">
                        Next.js
                    </div>
                    <div className="skill__category__list__text">
                        Express.js
                    </div>
                    <div className="skill__category__list__text">
                        Symfony
                    </div>
                </div>
            </div>
            <div className="skill__category">
                <h3 className="skill__category__title">
                    Outils & Environnements
                </h3>
                <div className="skill__category__list">
                    <div className="skill__category__list__text">
                        Git
                    </div>
                    <div className="skill__category__list__text">
                        GitHub
                    </div>
                    <div className="skill__category__list__text">
                        Yarn / NPM
                    </div>
                    <div className="skill__category__list__text">
                        Terminal
                    </div>
                </div>
            </div>
            <div className="skill__category">
                <h3 className="skill__category__title">
                    Design & Prototypage
                </h3>
                <div className="skill__category__list">
                    <div className="skill__category__list__text">
                        Figma
                    </div>
                    <div className="skill__category__list__text">
                        Adobe XD
                    </div>
                    <div className="skill__category__list__text">
                       Photoshop
                    </div>
                    <div className="skill__category__list__text">
                        Zeplin
                    </div>
                    <div className="skill__category__list__text">
                        rigueur
                    </div>
                    <div className="skill__category__list__text">
                        autonomie
                    </div>
                </div>
            </div>
            <div className="skill__category">
                <h3 className="skill__category__title">
                    Aptitudes professionnelles
                </h3>
                <div className="skill__category__list">
                    <div className="skill__category__list__text">
                        Travail en équipe
                    </div>
                    <div className="skill__category__list__text">
                        Management
                    </div>
                    <div className="skill__category__list__text">
                       Organisation
                    </div>
                    <div className="skill__category__list__text">
                        Adaptabilité
                    </div>
                    <div className="skill__category__list__text">
                        Rigueur
                    </div>
                    <div className="skill__category__list__text">
                        Autonomie
                    </div>
                </div>
            </div>
        </div>
    </div> 
  );
}

