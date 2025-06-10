import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Presentation() {
  return (
    <div id="presentation" className="presentation">
      <div className="presentation__container">
        <div className="presentation__content">
          <div className="presentation__wrapper">
            <p className="patchTxt">présentation</p>
            <h3 className="presentation__content__title">Créer des expériences web innovantes</h3>
            <p className="presentation__content__text">
              Développeur web front-end depuis plus de cinq ans, j’ai contribué à des projets variés mêlant esthétique, performance et accessibilité. Passionné par la création d’interfaces intuitives, je veille à offrir une expérience utilisateur optimale. Curieux et rigoureux, je me tiens à jour des évolutions du web, et j’apprécie particulièrement le travail en équipe, convaincu que la diversité des idées mène à des solutions de qualité.
            </p>
            {/* <p className="presentation__content__text">
              Au fil des années, j&rsquo;ai développé des compétences solides en matière de création d&rsquo;interfaces utilisateur réactives et intuitives. Je suis particulièrement attentif aux détails et à l&rsquo;accessibilité, en m&rsquo;assurant que chaque utilisateur, quels que soient ses besoins, puisse profiter pleinement de l&rsquo;expérience en ligne.
            </p>
            <p className="presentation__content__text">
              Au-delà des compétences techniques, je suis un fervent défenseur de l&rsquo;apprentissage continu. Je suis toujours avide de me tenir au courant des dernières innovations dans le domaine du développement web et d&rsquo;améliorer mes compétences. J&rsquo;aime également travailler en équipe et collaborer avec des professionnels de différents horizons, car je crois fermement que l&rsquo;échange d&rsquo;idées et la diversité des perspectives peuvent conduire à des solutions exceptionnelles.
            </p> */}
          </div>
          {/* <Link href="#" className="presentation__content__link">Mon CV</Link> */}
        </div>
        <div className="presentation__visuel">
          <Image
            src="/img/antoine-boisard.jpg"
            alt="Antoine Boisard"
            width={500}
            height={500}
            className="presentation__visuel__pic__img"
          />
          <div className="presentation__visuel__links">
            <Link href="https://github.com/tituan" target="_blank" className="presentation__visuel__links__icon">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="https://www.linkedin.com/in/antoine-boisard-216a0741/" className="presentation__visuel__links__icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
