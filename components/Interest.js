'use client';

import Link from 'next/link';
import Image from "next/image";
import Slider from "react-slick";
import { useRef, useEffect, useState } from 'react';

const galleryItems = [
  {
    type: "image",
    src: "/img/photo-01.jpg",
    alt: "Vintage Imperial",
    title: "Vintage Imperial",
    description: "Une voiture Imperial vintage magnifiquement conservée, aperçue lors de mon voyage à London, Ontario, Canada. Un modèle intemporel mêlant design automobile et nostalgie.",
    date: "2025",
  },
  {
    type: "video",
    src: "/videos/dji-villeneuve.mp4",
    poster: "/img/poster-villeneuve.png",
    alt: "Flamants roses sud de France",
    title: "Flamants roses",
    description: "Une rencontre paisible avec des flamants roses dans les lagunes sauvages de Villeneuve-lès-Maguelone.",
    date: "2025",
  },
  {
    type: "image",
    src: "/img/photo-02.jpg",
    alt: "Palmier",
    title: "Palmier",
    description: "Un palmier capturé au coucher du soleil dans le cœur d'Athènes, mêlant décor urbain et beauté naturelle sous la lumière dorée du soir.",
    date: "2025",
  },
  {
    type: "video",
    src: "/videos/dji-meze.mp4",
    poster: "/img/poster-meze.png",
    alt: "Survol de l'Étang de Thau",
    title: "Survol de l'Étang de Thau",
    description: "Images aériennes au-dessus de l'Étang de Thau à Mèze, Hérault, mettant en valeur les parcs à huîtres et les eaux calmes sous la douce lumière du soir.",
    date: "2025",
  },
  {
    type: "image",
    src: "/img/photo-03.jpg",
    alt: "Portrait de Maria Callas",
    title: "Portrait de Maria Callas",
    description: "Un portrait chaleureux de Maria Callas exposé dans un restaurant à Athènes. La présence de l'icône de l'opéra résonne dans l'atmosphère de ce lieu intimiste.",
    date: "2025",
  },
  {
    type: "video",
    src: "/videos/dji-paris.mp4",
    poster: "/img/poster-paris.png",
    alt: "Vol au dessus",
    title: "Survol de la Seine",
    description: "Un survol aérien de la Seine entre Clichy et Asnières, capturant les dernières lueurs sur le quartier d'affaires de La Défense, avec des reflets roses et violets dans le fleuve au coucher du soleil.",
    date: "2025",
  },
];


export default function Interest() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
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
            La photographie et la vidéo sont des passions qui me permettent d&rsquo;exprimer ma créativité, de capturer des moments précieux et de raconter des histoires à travers l&rsquo;image. La musique et l&rsquo;art occupent également une place essentielle dans ma vie.
          </p>
        </div>
        <div className="interest__galery">
          <Slider {...settings} className="interest__galery__wrapper">
            {galleryItems.map((item, i) => (
              <GalleryItem key={i} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

function GalleryItem({ item }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mobileQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
      setIsMobile(mobileQuery.matches);
    }
  }, []);

  const handleMouseEnter = () => {
    if (item.type === "video" && videoRef.current && !isMobile) {
      const video = videoRef.current;
      if (video.paused) {
        video.play().catch((error) => {
          console.warn("Play interrupted:", error);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (item.type === "video" && videoRef.current && !isMobile) {
      const video = videoRef.current;
      if (!video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  const handleVideoClick = () => {
    if (item.type === "video" && videoRef.current && isMobile) {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      className="itemGalery"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
    >
      <div className="itemGalery__pic">
        {item.type === "image" && (
          <Image
            src={item.src}
            alt={item.alt}
            width={400}
            height={250}
            className="itemGalery__pic__img"
          />
        )}
        {item.type === "video" && (
          <>
            <video
              ref={videoRef}
              src={item.src}
              poster={item.poster}
              width={400}
              height={250}
              muted
              loop
              playsInline
              preload="auto"
              className="itemGalery__pic__video"
            />
            {isMobile && !isPlaying && (
              <div className="play-icon"></div>
            )}
          </>
        )}
        <div className="itemGalery__overlay">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
}
