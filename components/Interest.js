'use client';
import Link from 'next/link';
import Image from "next/image";
import Slider from "react-slick";
import { useRef } from 'react';

const galleryItems = [
  {
    type: "image",
    src: "/img/photo-01.jpg",
    alt: "London Ontario - Car",
    title: "Imperial",
    description: "Imperial Car vintage from my trip in Canada.",
    date: "2025",
  },
  {
    type: "video",
    src: "/videos/dji-villeneuve.mp4",
    alt: "Urban Motion",
    title: "Urban Motion",
    description: "Dynamique de la ville en mouvement.",
    date: "2023",
  },
  {
    type: "image",
    src: "/img/photo-02.jpg",
    alt: "Player 2",
    title: "Player Two",
    description: "L’univers vidéoludique rétro.",
    date: "2021",
  },
  {
    type: "video",
    src: "/videos/dji-meze.mp4",
    alt: "Lights",
    title: "Night Lights",
    description: "Lumières de la nuit new-yorkaise.",
    date: "2020",
  },
  {
    type: "image",
    src: "/img/photo-03.jpg",
    alt: "Player 2",
    title: "Player Two",
    description: "L’univers vidéoludique rétro.",
    date: "2021",
  },
  {
    type: "video",
    src: "/videos/dji-paris.mp4",
    alt: "Urban Motion",
    title: "Urban Motion",
    description: "Dynamique de la ville en mouvement.",
    date: "2023",
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
            La photographie est une passion qui me permet d&rsquo;exprimer ma créativité et de capturer des moments précieux.
          </p>
          <p className="interest__content__text">
            La musique et l&rsquo;art occupent une place essentielle dans ma vie.
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

  const handleMouseEnter = () => {
    if (item.type === "video" && videoRef.current) {
      const video = videoRef.current;
      if (video.paused) {
        video.play().catch((error) => {
          console.warn("Play interrupted:", error);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (item.type === "video" && videoRef.current) {
      const video = videoRef.current;
      if (!video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  return (
    <div className="itemGalery" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
          <video
            ref={videoRef}
            src={item.src}
            width={400}
            height={250}
            muted
            loop
            playsInline
            preload="auto"  // on change ici
            className="itemGalery__pic__video"
            />
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
