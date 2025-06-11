import React from 'react';

// Placeholder floating emotion — in real version, you'd import R3F + Drei components
const FloatingEmotion = ({ emotion, image }) => {
  return (
    <div className="w-24 h-24 m-4 rounded-full overflow-hidden shadow-md animate-float">
      <img src={image} alt={emotion} className="w-full h-full object-cover" />
    </div>
  );
};

export default FloatingEmotion;
