import React from 'react'
import { Carousel } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

// import car1 from "../../img/car1.1.svg";
// import car2 from "../../img/car2.svg";
// import car3 from "../../img/car3.svg";

function CarouselComponent() {
  return (
    <div>
      <Carousel pause={false}>
        <Carousel.Item interval={9000}>
          <img
            className="w-100"
            src="#"
            alt="Foto de carros estacionados com a frase em destaque: Viva essa experiência, alugue carros de luxo na Digital Booking"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="w-100"
            src="#"
            alt="Foto do carro da Ferrari"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="w-100"
            src="#"
            alt="Foto do carro esportivo laranja"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent;
