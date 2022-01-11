import React from 'react';
import image1 from '../assets/image2.png';
import image2 from '../assets/image3.jpeg';
import image3 from '../assets/image4.jpg';

const Slideshow = () => {

  const colors=[image1,image2,image3];
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const delay = 2500;
   
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {colors.map((picture, index) => (
          <div className="slide" key={index}  >
            <img src={picture} alt="Image will be here shortly :)" style={{"width":"100%"}}></img>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

