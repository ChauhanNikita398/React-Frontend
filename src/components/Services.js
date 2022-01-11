import React from 'react';
import { CarouselProvider } from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Card,ButtonContainer, SliderContainer, StyledSlide, StyledSlider, BackButton,
    NextButton, CardText, CardImage, CardButton, CardButtonBlue } from "./styles";
import image1 from '../assets/s1.png';
import image2 from '../assets/s2.png';
import image3 from '../assets/s3.png';
import image4 from '../assets/s4.png';
import image5 from '../assets/s5.png';


const data = [
    {
      title: "Web Design & Development",
      cardText: "Progravida nibh vel velit auctor alinean, iorem quis bibendum",
      src: image1
    },
    {
      title: "Management Systems",
      cardText: "Progravida nibh vel velit auctor alinean, iorem quis bibendum",
      src: image2
    },
    {
      title: "Webhoisting",
      cardText: "Progravida nibh vel velit auctor alinean, iorem quis bibendum",
      src: image3
    },
    {
      title: "DevOps",
      cardText: "Progravida nibh vel velit auctor alinean, iorem quis bibendum",
      src: image4
    },
    {
      title: "On Demand Devs",
      cardText: "Progravida nibh vel velit auctor alinean, iorem quis bibendum",
      src: image5
    }
  ];
const Services = () => {
    return (
        <div>
            <h1 className='blockHeader'>Services</h1><br/><br/>
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
                        <Card>
                            <CardImage backgroundImage={item.src} />
                            <CardText>
                                <h2>{item.title}</h2>
                                <br/>
                                <h3 style={{"color":"grey","fontSize":"16px",
                                "paddingLeft":"2px","paddingRight":"2px","fontFamily":"sans-serif"}}>{item.cardText}</h3>
                            </CardText>
                            <CardButton />
                            <CardButtonBlue />
                        </Card>
                    </StyledSlide>
                ))}
                </StyledSlider>
                </SliderContainer>
                
            </CarouselProvider>
        </div>
    );
};

export default Services;







