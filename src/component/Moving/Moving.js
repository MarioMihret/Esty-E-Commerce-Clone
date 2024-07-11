import React from 'react';
import './Moving.css';
import move1 from '../../assets/client-1.png';
import move2 from '../../assets/client-2.png';
import move3 from '../../assets/client-3.png';
import move4 from '../../assets/client-4.png';
import move5 from '../../assets/client-5.png';
import move6 from '../../assets/client-6.png';

const moveImages = [move1, move2, move3, move4, move5, move6];

const Moving = () => {
  return (
    <div className="moving-container">
      <div className="moving">
        {moveImages.map((image, index) => (
          <div className="move" key={index}>
            <img src={image} alt={`Move ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moving;