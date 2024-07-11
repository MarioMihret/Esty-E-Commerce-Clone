import React from 'react';
import './HeroPart1.css';
import image1 from '../../assets/image_search_1659603324562.jpg';
import image2 from '../../assets/image_search_1665552140240.jpg';
import image3 from '../../assets/image_search_1665552024008.jpg';
import image4 from '../../assets/image_search_1665554313369.jpg';
import image5 from '../../assets/image_search_1665554344799.jpg';
import image6 from '../../assets/image_search_1665554374999.jpg';

const HeroPart1 = () => {
  return (
    <section>
      <h1>Check out the season biggest brands</h1>
      <div className="container">
        <div className="circle1">
          <img src={image1} alt="" />
          <div className="image-text">Tenniscore</div>
        </div>
        <div className="circle2">
          <img src={image2} alt="" />
          <div className="image-text">Ferrari</div>
        </div>
        <div className="circle3">
          <img src={image3} alt="" />
          <div className="image-text">Bugatti</div>
        </div>
        <div className="circle4">
          <img src={image4} alt="" />
          <div className="image-text">Lamborghini</div>
        </div>
        <div className="circle5">
          <img src={image5} alt="" />
          <div className="image-text">Toyota</div>
        </div>
        <div className="circle6">
          <img src={image6} alt="" />
          <div className="image-text">BMW</div>
        </div>
      </div>
    </section>
  );
};

export default HeroPart1;