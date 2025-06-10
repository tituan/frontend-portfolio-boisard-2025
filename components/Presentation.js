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
                    <p className="presentation__content__text">Je suis heureux de me présenter en tant que développeur web front-end, fort de cinq années d’expérience dans un domaine aussi stimulant qu’en perpétuelle évolution. Cette période m’a permis de contribuer à une grande variété de projets, de consolider mes compétences techniques et de cultiver une véritable passion pour la création d’interfaces à la fois esthétiques et performantes.</p>
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

