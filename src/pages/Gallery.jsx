import React, { useRef, useState } from "react";
import "./Gallery.css";
import GalleryItem from "./GalleryItem";
import ShoppingCart from "../components/ShoppingCart";

const images = [
  { src: "/img/css.png", alt: "CSS" },
  { src: "/img/express1.png", alt: "Express" },
  { src: "/img/figma.png", alt: "Figma" },
  { src: "/img/html.png", alt: "HTML" },
  { src: "/img/java.png", alt: "Java" },
  { src: "/img/javascript.png", alt: "JavaScript" },
  { src: "/img/nodejs.png", alt: "Node.js" },
  { src: "/img/python.png", alt: "Python" },
  { src: "/img/react.png", alt: "React" },
  { src: "/img/tailwind.png", alt: "Tailwind" },
];

const Gallery = () => {
  const [droppedIcons, setDroppedIcons] = useState([]);
  const cartRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleStop = (e, data, item) => {
    if (!isDragging) return; // Prevents execution if not dragging

    const cartRect = cartRef.current.getBoundingClientRect();
    const iconRect = e.target.getBoundingClientRect();

    // Collision detection
    if (
      iconRect.left < cartRect.right &&
      iconRect.right > cartRect.left &&
      iconRect.top < cartRect.bottom &&
      iconRect.bottom > cartRect.top
    ) {
      // Add item to droppedIcons only if not already added
      if (!droppedIcons.some((icon) => icon.alt === item.alt)) {
        setDroppedIcons((prev) => [...prev, item]);
      } else {
        console.log(`${item.alt} is already in the cart`);
      }
    }
    setIsDragging(false);
  };

  console.log(droppedIcons);

  return (
    <section className='container'>
      <section className='gallery'>
        {images.map((image, index) => (
          <GalleryItem
            func={(e, data) => handleStop(e, data, image)}
            onStart={handleStart}
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </section>
      <ShoppingCart ref={cartRef} />
    </section>
  );
};

export default Gallery;
