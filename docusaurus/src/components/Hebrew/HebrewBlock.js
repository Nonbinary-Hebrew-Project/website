import React from 'react';

export default function HebrewBlock({children}) {
  return (
    <span
      dir="rtl"
      style={{
        backgroundColor: "lightgrey",
        borderRadius: '2px',
        color: 'black',
        fontSize: '1.5rem',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}