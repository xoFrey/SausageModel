import React from "react";
import Draggable from "react-draggable";
import "./Gallery.css";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const images = [
    { src: "/img/Login.png", alt: "Login" },
    { src: "/img/Home.png", alt: "Home" },
    { src: "/img/EditProfile.png", alt: "Edit Profile" },
    { src: "/img/Yoga.png", alt: "Yoga" },
    { src: "/img/Meditation.png", alt: "Meditation" },
    { src: "/img/Landingpage.png", alt: "Landingpage" },
    { src: "/img/Notification.png", alt: "Notification" },
    { src: "/img/Playlist.png", alt: "Playlist" },
  ];
  return (
    <section className='gallery'>
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </section>
  );
};

export default Gallery;
