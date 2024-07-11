import React from 'react';
import './HeroPart2.css';
import rect1 from '../../assets/il_340x270.1668127003_kwjn.webp';
import rect2 from '../../assets/il_340x270.4479721093_gfiz.webp';
import rect3 from '../../assets/il_340x270.4697447958_aoxe.webp';
import rect4 from '../../assets/il_340x270.5806724446_jqg8.webp';

const HeroPart2 = () => {
  const textContent = [
    "Unique Handcrafted Gifts",
    "Personalized Home Decor",
    "Sustainable Fashion Accessories",
    "Artisanal Kitchen Essentials"
  ];

  return (
    <div>
      <h1>Shop our popular gift categories</h1>
      <div className='rectangle'>
        <div className="rect-container">
          <div className="rect animate__animated">
            <img src={rect1} alt='' className="animate__animated animate__bounceInLeft" />
          </div>
          <p className="text-overlay">{textContent[0]}</p>
        </div>
        <div className="rect-container">
          <div className="rect animate__animated">
            <img src={rect2} alt='' className="animate__animated animate__zoomIn" />
          </div>
          <p className="text-overlay">{textContent[1]}</p>
        </div>
        <div className="rect-container">
          <div className="rect animate__animated">
            <img src={rect3} alt='' className="animate__animated animate__rotateIn" />
          </div>
          <p className="text-overlay">{textContent[2]}</p>
        </div>
        <div className="rect-container">
          <div className="rect animate__animated">
            <img src={rect4} alt='' className="animate__animated animate__flipInX" />
          </div>
          <p className="text-overlay">{textContent[3]}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroPart2;