import { useState, useEffect } from "react";
import "./BannerSlider.css";

export default function BannerSlider() {
  const images = [
    "/images/Banner 1.avif",
    "/images/banner2.avif",
    "/images/banner3.avif"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section className="slider">
      <div className="slides">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Banner ${i + 1}`}
            className={i === index ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
}
