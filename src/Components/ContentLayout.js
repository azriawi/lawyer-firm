import React from 'react';
import lawyerImage from '../Assets/lawyer.jpg';

const ContentLayout = () => {
  return (
    <div className="content-layout">
      <div className="left-column">
        <img src={lawyerImage} alt="Your Image" className="left-column-image" />
      </div>
      <div className="right-column">
        <h1>Your Justice, Our Commitment, Defending Your Rights with Integrity</h1>
        <p>We are firmly convinced that our clients are our utmost priority, we are totally dedicated in providing the highest 
        standard of legal services to our clients.</p>
        <button className='primary-button-home'>Contact Us</button>
      </div>
      <div className="center">
        <h2>About Us</h2>
        
      </div>
    </div>
    
  );
};

export default ContentLayout;
