
import React from 'react';
import { Image, Spinner } from '@themesberg/react-bootstrap';

import ReactLogo from "../assets/img/technologies/react-logo.svg";

export default (props) => {

  const { show } = props;

  return (
    <div className={`preloader bg-soft flex-column justify-content-center align-items-center ${show ? "" : "show"}`}>
      <Image 
        className="loader-element animate__animated animate__jackInTheBox" 
        src={ReactLogo} 
        height={40}
        alt="Loading..." 
        onError={(e) => {
          // Fallback to spinner if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <Spinner 
        animation="border" 
        variant="primary" 
        style={{ display: 'none' }}
        className="loader-element"
      />
    </div>
  );
};
