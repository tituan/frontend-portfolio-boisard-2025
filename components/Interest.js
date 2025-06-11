// 'use client';
// import Link from 'next/link';
// import Image from "next/image";
// import Slider from "react-slick";
// import { useRef } from 'react';

// const galleryItems = [
//   {
//     type: "image",
//     src: "/img/photo-01.jpg",
//     alt: "Imperial Vintage Car",
//     title: "Imperial Vintage Car",
//     description: "A beautifully preserved Imperial vintage car spotted during my trip to London, Ontario, Canada. A timeless piece blending automotive design and nostalgia.",
//     date: "2025",
//   },
//   {
//     type: "video",
//     src: "/videos/dji-villeneuve.mp4",
//     alt: "Pink Flamingos in Southern France",
//     title: "Pink Flamingos",
//     description: "A peaceful encounter with pink flamingos in the wild lagoons of Villeneuve-lès-Maguelone.",
//     date: "202",
//   },
//   {
//     type: "image",
//     src: "/img/photo-02.jpg",
//     alt: "Palm Tree at Sunset ",
//     title: "Palm Tree at Sunset ",
//     description: "A palm tree captured at sunset in the heart of Athens, blending urban scenery with natural beauty under the golden light of the evening.",
//     date: "2025",
//   },
//   {
//     type: "video",
//     src: "/videos/dji-meze.mp4",
//     alt: "Flying Over Étang de Thau",
//     title: "Flying Over",
//     description: "Aerial footage above the Étang de Thau in Mèze, Hérault, showcasing oyster farms and calm waters under the soft evening light.",
//     date: "2025",
//   },
//   {
//     type: "image",
//     src: "/img/photo-03.jpg",
//     alt: "Maria Callas Portrait ",
//     title: "Maria Callas Portrait",
//     description: "A warm-toned portrait of Maria Callas displayed in a restaurant in Athens. The presence of the iconic opera singer resonates through the atmosphere of this intimate setting.",
//     date: "2025",
//   },
//   {
//     type: "video",
//     src: "/videos/dji-paris.mp4",
//     alt: "Flight Over the Seine ",
//     title: "Flight Over the Seine ",
//     description: "Aerial journey over the Seine between Clichy and Asnières, capturing the fading light over La Défense business district with soft pink and violet tones reflecting in the river at sunset.",
//     date: "2025",
//   },
// ];

// export default function Interest() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <div id="interest" className="interest">
//       <div className="interest__container">
//         <p className="patchTxt">Intérêts</p>
//         <div className="interest__content">
//           <p className="interest__content__title">Développeur web mais pas que !</p>
//           <p className="interest__content__text">
//             La photographie et la vidéo sont des passions qui me permettent d&rsquo;exprimer ma créativité, de capturer des moments précieux et de raconter des histoires à travers l&rsquo;image. La musique et l&rsquo;art occupent également une place essentielle dans ma vie.
//           </p>
//         </div>
//         <div className="interest__galery">
//           <Slider {...settings} className="interest__galery__wrapper">
//             {galleryItems.map((item, i) => (
//               <GalleryItem key={i} item={item} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

// function GalleryItem({ item }) {
//   const videoRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (item.type === "video" && videoRef.current) {
//       const video = videoRef.current;
//       if (video.paused) {
//         video.play().catch((error) => {
//           console.warn("Play interrupted:", error);
//         });
//       }
//     }
//   };

//   const handleMouseLeave = () => {
//     if (item.type === "video" && videoRef.current) {
//       const video = videoRef.current;
//       if (!video.paused) {
//         video.pause();
//         video.currentTime = 0;
//       }
//     }
//   };

//   return (
//     <div className="itemGalery" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="itemGalery__pic">
//         {item.type === "image" && (
//           <Image
//             src={item.src}
//             alt={item.alt}
//             width={400}
//             height={250}
//             className="itemGalery__pic__img"
//           />
//         )}
//         {item.type === "video" && (
//           <video
//             ref={videoRef}
//             src={item.src}
//             width={400}
//             height={250}
//             muted
//             loop
//             playsInline
//             preload="auto"  // on change ici
//             className="itemGalery__pic__video"
//             />
//         )}

//         <div className="itemGalery__overlay">
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//           <span>{item.date}</span>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import Link from 'next/link';
import Image from "next/image";
import Slider from "react-slick";
import { useRef, useEffect, useState } from 'react';

// Ton tableau galleryItems complet (avec posters pour les vidéos)
const galleryItems = [
  {
    type: "image",
    src: "/img/photo-01.jpg",
    alt: "Imperial Vintage Car",
    title: "Imperial Vintage Car",
    description: "A beautifully preserved Imperial vintage car spotted during my trip to London, Ontario, Canada. A timeless piece blending automotive design and nostalgia.",
    date: "2025",
  },
  {
    type: "video",
    src: "/videos/dji-villeneuve.mp4",
    poster: "/img/poster-villeneuve.png",
    alt: "Pink Flamingos in Southern France",
    title: "Pink Flamingos",
    description: "A peaceful encounter with pink flamingos in the wild lagoons of Villeneuve-lès-Maguelone.",
    date: "2025",
  },
  {
    type: "image",
    src: "/img/photo-02.jpg",
    alt: "Palm Tree at Sunset ",
    title: "Palm Tree at Sunset ",
    description: "A palm tree captured at sunset in the heart of Athens, blending urban scenery with natural beauty under the golden light of the evening.",
    date: "2025",
  },
  {
    type: "video",
    src: "/videos/dji-meze.mp4",
    poster: "/img/poster-meze.png",
    alt: "Flying Over Étang de Thau",
    title: "Flying Over",
    description: "Aerial footage above the Étang de Thau in Mèze, Hérault, showcasing oyster farms and calm waters under the soft evening light.",
    date: "2025",
  },
  {
    type: "image",
    src: "/img/photo-03.jpg",
    alt: "Maria Callas Portrait ",
    title: "Maria Callas Portrait",
    description: "A warm-toned portrait of Maria Callas displayed in a restaurant in Athens. The presence of the iconic opera singer resonates through the atmosphere of this intimate setting.",
    date: "2025",
  },
  {
    type: "video",
    src: "/videos/dji-paris.mp4",
    poster: "/img/poster-paris.png",
    alt: "Flight Over the Seine ",
    title: "Flight Over the Seine ",
    description: "Aerial journey over the Seine between Clichy and Asnières, capturing the fading light over La Défense business district with soft pink and violet tones reflecting in the river at sunset.",
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
      } else {
        video.pause();
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
