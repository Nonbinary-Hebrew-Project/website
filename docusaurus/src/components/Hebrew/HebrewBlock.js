import React from 'react';

export default function HebrewBlock({children, color}) {
  return (
    <span
      dir="rtl"
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}