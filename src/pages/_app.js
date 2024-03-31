import MainLayout from "@/layout";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + 2) % 2);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  };
  return (
    <MainLayout
      prevSlide={prevSlide}
      nextSlide={nextSlide}
      currentSlide={currentSlide}
    >
      <Component {...pageProps} currentSlide={currentSlide} />
    </MainLayout>
  );
}
