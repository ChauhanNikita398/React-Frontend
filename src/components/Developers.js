import React from 'react';
import image1 from '../assets/d1.jpg';
import image2 from '../assets/d2.jpg';
import image3 from '../assets/d3.jpeg';
const Developers = () => {
    return (
        <div>
            <h1 className='blockHeader'>Developers on Demand</h1><br/><br/>
            <div className='blockBox'>
                <span><img src={image2} className='image'></img></span>
                <span><img src={image1} className='image'></img></span>
                <span><img src={image3} className='image'></img></span>
            </div>
        </div>
    );
};

export default Developers;