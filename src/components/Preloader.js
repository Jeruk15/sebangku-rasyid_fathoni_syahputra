
import React from 'react';
import { Image, Spinner } from '@themesberg/react-bootstrap';

export default (props) => {

  const { show } = props;

  console.log('Preloader render - show:', show);

  return (
    <div className={`preloader bg-soft flex-column justify-content-center align-items-center ${show ? "" : "show"}`}>
      <Image 
        className="loader-element animate__animated animate__jackInTheBox" 
        src="/react-logo.svg"
        height={40}
        alt="Loading..." 
        onLoad={() => console.log('React logo loaded successfully')}
        onError={(e) => {
          // Fallback to spinner if image fails to load
          console.log('React logo failed to load, showing spinner');
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
