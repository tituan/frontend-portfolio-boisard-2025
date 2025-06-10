import Link from 'next/link';
import Image from "next/image";

export default function Hero() {
  return (
    <div className="intro">
        <div className="intro__wrapper ">
            <h1 className="intro__title">
                Antoine Boisard
            </h1>
            <h2 className="intro__subtitle">
                Developpeur web frontend
            </h2>
        </div>
        <div className="intro__background ">
            <Image
                src="/img/background.jpg"
                alt="background"
                width={50}
                height={50}
                className=""/>
        </div>
        <a href="#presentation" className="intro__btn smooth">
            {/* <svg className="icon">
                <use xlink:href="#icon-arrow-down"></use>
            </svg> */}
        </a>
    </div> 
  );
}

