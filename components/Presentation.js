import Link from 'next/link';
import Image from "next/image";

export default function Presentation() {
  return (
    <div id="presentation" className="presentation">
        <div className="presentation__container">
            <div className="presentation__content">
                <div className="presentation__wrapper">
                    <p className="patchTxt">présentation</p>
                    <h3 className="presentation__content__title">Créer des expériences web innovantes</h3>
                    <p className="presentation__content__text">Je suis ravi de me présenter en tant que développeur web frontend avec une expérience de cinq ans dans ce domaine dynamique et en constante évolution. Au cours de ces années, j'ai eu l'opportunité de travailler sur divers projets, d'acquérir des compétences techniques solides et de développer une passion pour la création d'expériences utilisateur exceptionnelles.</p>
                    <p className="presentation__content__text">Au fil des années, j'ai développé des compétences solides en matière de création d'interfaces utilisateur réactives et intuitives. Je suis particulièrement attentif aux détails et à l'accessibilité, en m'assurant que chaque utilisateur, quels que soient ses besoins, puisse profiter pleinement de l'expérience en ligne. </p>
                    <p className="presentation__content__text">Au-delà des compétences techniques, je suis un fervent défenseur de l'apprentissage continu. Je suis toujours avide de me tenir au courant des dernières innovations dans le domaine du développement web et d'améliorer mes compétences. J'aime également travailler en équipe et collaborer avec des professionnels de différents horizons, car je crois fermement que l'échange d'idées et la diversité des perspectives peuvent conduire à des solutions exceptionnelles.</p>
                </div>
                <Link href="#" className="presentation__content__link">Mon CV</Link>
            </div>
            <div className="presentation__visuel">
                {/* <div className="presentation__visuel__pic"> */}
                    <Image
                        src="/img/antoine-boisard.jpg"
                        alt="Antoine Boisard"
                        width={500}
                        height={500}
                        className="presentation__visuel__pic__img"/>
                {/* </div> */}
                <div className="presentation__visuel__links">
                    <Link href="https://github.com/tituan" target="_blank" className="presentation__visuel__links__icon"><i className="fa-brands fa-github"></i></Link>
                    <Link href="https://www.linkedin.com/in/antoine-boisard-216a0741/" className="presentation__visuel__links__icon"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>
        </div>
    </div> 
  );
}

