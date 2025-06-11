// import Link from 'next/link';
// import Image from "next/image";

// export default function Header() {
//   return (
//     <header className="header">
// 			<div className="header__container">
// 				<div className="header__logo">
//           <Image
//             src="/img/new-logo-ab.png"
//             alt="Logo Antoine Boisard"
//             width={50}
//             height={50}
//             className="header__logo__image"/>
// 				</div>
// 				<div className="header__wrapper">
// 					<div className="header__burger open-nav-js">
// 						<span className="header__burger__bar"></span>
// 					</div>
// 					<div className="header__nav">
// 						<Link href="#presentation" className="header__nav__link smooth">PRÉSENTATION</Link>
// 						<Link href="#skill" className="header__nav__link smooth">compétences</Link>
// 						<Link href="#project" className="header__nav__link smooth">Projets</Link>
// 						<Link href="#interest" className="header__nav__link smooth">Intérêts</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</header>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Image
            src="/img/new-logo-ab.svg"
            alt="Logo Antoine Boisard"
            width={50}
            height={50}
            className="header__logo__image"
          />
        </div>

        <div className="header__wrapper">
          {/* BURGER */}
          <div
            className={`header__burger ${menuOpen ? 'active-burger' : ''}`}
            onClick={toggleMenu}
          >
            <span className="header__burger__bar"></span>
          </div>

          {/* NAVIGATION */}
          <div className={`header__nav ${menuOpen ? 'active-nav' : ''}`}>
            <Link href="#presentation" className="header__nav__link smooth" onClick={() => setMenuOpen(false)}>
              PRÉSENTATION
            </Link>
            <Link href="#skill" className="header__nav__link smooth" onClick={() => setMenuOpen(false)}>
              compétences
            </Link>
            <Link href="#project" className="header__nav__link smooth" onClick={() => setMenuOpen(false)}>
              Projets
            </Link>
            <Link href="#interest" className="header__nav__link smooth" onClick={() => setMenuOpen(false)}>
              Intérêts
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}



