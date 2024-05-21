import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { Image } from 'react-bootstrap';
import '../css/carousel.css'

const Carrousel = () => {
    return (
      <div className='contenedor-relativo'>
      <h1 className='nombre'>NAHUEL RODRIGUEZ</h1>
      <Carousel controls={false} slide={true}>          
          
      <Carousel.Item className='carousel-funky-img' interval={5000}>
        <Image src={img1}/>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-funky-img' interval={5000}>
      <Image src={img2}/>
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-funky-img' interval={5000}>
      <Image src={img3}/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    );
};

export default Carrousel;