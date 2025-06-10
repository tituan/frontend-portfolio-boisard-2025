import Link from 'next/link';
import Image from "next/image";

export default function Interest() {
  return (
    <div id="interest" className="interest">
        <div className="interest__container">
            <p className="patchTxt">Intérêts</p>
            <div className="interest__content">
                <p className="interest__content__title">Developpeur web mais pas que !</p>
                <p className="interest__content__text">La photographie est une passion qui me permet d'exprimer ma créativité et de capturer des moments précieux.  À travers mes clichés, j'essaie de transmettre des émotions et de raconter des histoires visuelles.</p>
                <p className="interest__content__text">La musique et l'art occupent une place essentielle dans ma vie. Ils me permettent d'explorer ma créativité, de m'exprimer et d'apprécier la beauté qui nous entoure.</p>
            </div>
            <div className="interest__galery">
                <div className="interest__galery__wrapper">
                    <div href="https://picsum.photos/640/360"  className="itemGalery">
                        <picture className="itemGalery__pic">	
                            {/* <img src="dist/img/bronx_slide.jpg" alt="" className="itemGalery__pic__img"> */}
                        </picture>
                    </div>
                    <div className="itemGalery">
                        <picture className="itemGalery__pic">	
                            {/* <img src="dist/img/death.jpg" alt="" className="itemGalery__pic__img"> */}
                        </picture>
                    </div>
                    <div className="itemGalery">
                        <picture className="itemGalery__pic">	
                            {/* <img src="dist/img/bronx2_slide.jpg" alt="" className="itemGalery__pic__img"> */}
                        </picture>
                    </div>
                    <div className="itemGalery">
                        <picture className="itemGalery__pic">	
                            {/* <img src="dist/img/player2.jpg" alt="" className="itemGalery__pic__img"> */}
                        </picture>
                    </div>
                    <div className="itemGalery">
                        <picture className="itemGalery__pic">	
                            {/* <img src="dist/img/bronx3_slide.jpg" alt="" className="itemGalery__pic__img"> */}
                        </picture>
                    </div>
                </div>
            </div>
            <div className="interest__more">
                <p className="">#BASKET</p>
                <p className="">#BASKET</p>
                <p className="">#BASKET</p>
                <p className="">#BASKET</p>
            </div>
        </div>
    </div>
  );
}


