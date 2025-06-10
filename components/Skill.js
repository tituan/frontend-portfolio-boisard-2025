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
                        html
                    </div>
                    <div className="skill__category__list__text">
                        css
                    </div>
                    <div className="skill__category__list__text">
                        Javascript
                    </div>
                    <div className="skill__category__list__text">
                        sass
                    </div>
                    <div className="skill__category__list__text">
                        git
                    </div>
                    <div className="skill__category__list__text">
                        php
                    </div>
                    <div className="skill__category__list__text">
                        twig
                    </div>					
                </div>
            </div>
            <div className="skill__category">
                <h3 className="skill__category__title">
                Outils
                </h3>
                <div className="skill__category__list">
                    <div className="skill__category__list__text">
                        grunt
                    </div>
                    <div className="skill__category__list__text">
                        github
                    </div>
                    <div className="skill__category__list__text">
                        symfony
                    </div>
                    <div className="skill__category__list__text">
                        Terminal
                    </div>
                    <div className="skill__category__list__text">
                        Visual code
                    </div>
                </div>
            </div>
            <div className="skill__category">
                <h3 className="skill__category__title">
                    Design
                </h3>
                <div className="skill__category__list">
                    <div className="skill__category__list__text">
                        photoshop
                    </div>
                    <div className="skill__category__list__text">
                        Adobe XD
                    </div>
                    <div className="skill__category__list__text">
                        figma
                    </div>
                    <div className="skill__category__list__text">
                        zeplin
                    </div>
                </div>
            </div>
            <div className="skill__category">
                <h3 className="skill__category__title">
                    Aptitudes professionnelles
                </h3>
                <div className="skill__category__list">
                    <div className="skill__category__list__text">
                        travail en équipe
                    </div>
                    <div className="skill__category__list__text">
                        management
                    </div>
                    <div className="skill__category__list__text">
                        organisation
                    </div>
                    <div className="skill__category__list__text">
                        adaptabilité
                    </div>
                    <div className="skill__category__list__text">
                        rigueur
                    </div>
                    <div className="skill__category__list__text">
                        autonomie
                    </div>
                </div>
            </div>
        </div>
    </div> 
  );
}

