import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring"; 

 

export default function DashboardCarousel(props) { 
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  }); 

  const [offsetRadius, setOffsetRadius] = useState(5); 
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [autoplayInterval, setAutoplayInterval] = useState(2000);
  const [cards] = useState(table);

  useEffect(() => {
    const interval = setInterval(() => { 
      setGoToSlide((prevSlide) => (prevSlide + 1) % cards.length);
    }, autoplayInterval);

    return () => clearInterval(interval); 
  }, [autoplayInterval, cards.length]);


  useEffect(() => {
    setOffsetRadius(props?.offset);
    setShowArrows(props?.showArrows);
  }, [props?.offset, props?.showArrows]);

  return (
    <div style={{ width: props.width, height: props.height, margin: props.margin }}> 
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
        infiniteLoop
        autoPlay
        stopOnHover
        interval={5000}

      />
    </div>
  );
}
