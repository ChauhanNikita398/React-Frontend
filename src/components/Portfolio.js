import React from 'react';
import image1 from '../assets/p1.jpg';
import image2 from '../assets/p2.jpg';
import image3 from '../assets/p3.jpg';

const Portfolio = () => {
    return (
        <div>
            <h1 className='blockHeader'>Portfolio/ Case Studies</h1><br/><br/>
            <div className='blockBox'>
                <span><img src={image1} className='image'></img></span>
                <span><img src={image2} className='image'></img></span>
                <span><img src={image3} className='image'></img></span>
            </div>
        </div>
    );
};

export default Portfolio;