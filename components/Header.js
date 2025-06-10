import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
			<div className="header__container">
				<div className="header__logo">
          <Image
            src="/img/antoine-boisard.jpg"
            alt="Logo de mon portfolio"
            width={50}
            height={50}
            className="header__logo__image"/>
				</div>
				<div className="header__wrapper">
					<div className="header__burger open-nav-js">
						<span className="header__burger__bar"></span>
					</div>
					<div className="header__nav">
						<Link href="#presentation" className="header__nav__link smooth">PRÉSENTATION</Link>
						<Link href="#skill" className="header__nav__link smooth">compétences</Link>
						<Link href="#project" className="header__nav__link smooth">Projets</Link>
						<Link href="#interest" className="header__nav__link smooth">Intérêts</Link>
					</div>
				</div>
			</div>
		</header>
  );
}