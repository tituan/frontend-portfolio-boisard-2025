'use client';
import Link from 'next/link';
import Image from "next/image";
import Slider from "react-slick";

const galleryItems = [
  {
    src: "/img/bronx_slide.jpg",
    alt: "Bronx Slide",
    link: "https://picsum.photos/640/360",
  },
  {
    src: "/img/death.jpg",
    alt: "Death",
    link: "https://picsum.photos/640/360?2",
  },
  {
    src: "/img/bronx2_slide.jpg",
    alt: "Bronx 2 Slide",
    link: "https://picsum.photos/640/360?3",
  },
  {
    src: "/img/player2.jpg",
    alt: "Player 2",
    link: "https://picsum.photos/640/360?4",
  },
  {
    src: "/img/bronx3_slide.jpg",
    alt: "Bronx 3 Slide",
    link: "https://picsum.photos/640/360?5",
  },
];

const interests = [
  "#PHOTOGRAPHIE",
  "#MUSIQUE",
  "#ART",
  "#BASKET",
];

export default function Interest() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="interest" className="interest">
      <div className="interest__container">
        <p className="patchTxt">Intérêts</p>
        <div className="interest__content">
          <p className="interest__content__title">Développeur web mais pas que !</p>
          <p className="interest__content__text">
            La photographie est une passion qui me permet d&rsquo;exprimer ma créativité et de capturer des moments précieux. À travers mes clichés, j&rsquo;essaie de transmettre des émotions et de raconter des histoires visuelles.
          </p>
          <p className="interest__content__text">
            La musique et l&rsquo;art occupent une place essentielle dans ma vie. Ils me permettent d&rsquo;explorer ma créativité, de m&rsquo;exprimer et d&rsquo;apprécier la beauté qui nous entoure.
          </p>
        </div>
        <div className="interest__galery">
          <Slider {...settings} className="interest__galery__wrapper">
            {galleryItems.map((item, i) => (
              <div className="itemGalery" key={i}>
                <Link href={item.link} target="_blank" rel="noopener noreferrer" className="itemGalery__pic">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={250}
                    className="itemGalery__pic__img"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <div className="interest__more">
          {interests.map((interest, i) => (
            <p key={i}>{interest}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
