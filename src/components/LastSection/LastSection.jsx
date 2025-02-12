import React from 'react';
import './LastSection.css'; // For styling
import picA from '../../assets/p1.png';
import picB from '../../assets/p2.png';
import picC from '../../assets/p3.png';
import picD from '../../assets/p4.png';
import picE from '../../assets/p5.png';

const LastSection = () => {
  return (
    <div className="last-section">
      <div className="column">
        <img src={picA} alt="p1" />
        <p className="bold-text">Bold Text 1</p>
        <p>Normal Text 1</p>
      </div>
      <div className="column">
        <img src={picB} alt="p2" />
        <p className="bold-text">Bold Text 2</p>
        <p>Normal Text 2</p>
      </div>
      <div className="column">
        <img src={picC} alt="p3" />
        <p className="bold-text">Bold Text 3</p>
        <p>Normal Text 3</p>
      </div>
      <div className="column">
        <img src={picD} alt="p4" />
        <p className="bold-text">Bold Text 4</p>
        <p>Normal Text 4</p>
      </div>
      <div className="column">
        <img src={picE} alt="p5" />
        <p className="bold-text">Bold Text 5</p>
        <p>Normal Text 5</p>
      </div>
    </div>
  );
};

export default LastSection;
