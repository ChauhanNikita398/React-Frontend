import React from 'react';
import { CarouselProvider } from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Card,ButtonContainer, SliderContainer, StyledSlide, StyledSlider, BackButton,
    NextButton, CardImage, CardButton, CardButtonBlue } from "./styles";
import image1 from '../assets/pr1.png';
import image2 from '../assets/pr2.png';
import image3 from '../assets/pr3.png';
import image4 from '../assets/pr4.png';
const data = [
    {
      src: image1
    },
    {
      src: image2
    },
    {
      src: image3
    },
    {
      src: image4
    }
  ];
const Products = () => {
    return (
        <div>
            <h1 className='blockHeader'>Porducts</h1><br/><br/>
            <CarouselProvider naturalSlideWidth={200} naturalSlideHeight={100} totalSlides={data.length}
                            visibleSlides={3} step={3} >
                <ButtonContainer>
                    <BackButton>
                        <FiChevronLeft size="1.5em" />
                    </BackButton>
                    <NextButton>
                        <FiChevronRight size="1.5em" />
                    </NextButton>
                </ButtonContainer>
                <SliderContainer>
                <StyledSlider classNameAnimation="animating"> {data.map((item, index) => (
                    <StyledSlide index={index} classNameHidden="hidden" classNameVisible="visible">
                        <span><img src={item.src} className='image' style={{margin:"2px 2px 2px 2px"}}></img></span>
                    </StyledSlide>
                ))}
                </StyledSlider>
                </SliderContainer>
                
            </CarouselProvider>
        </div>
    );
};

export default Products;