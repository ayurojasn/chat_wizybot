/**
 * TypingIndicator.tsx
 * 
 * This file contains the TypingIndicator component of the application.
 * It imports the styles from TypingIndicator.css.
 * 
 * @module TypingIndicator.tsx
 */

import React from 'react';
import '../../assets/styles/TypingIndicator.css';

/**
 * TypingIndicator component displays a typing indicator animation.
 * It returns a div with the class "typing-indicator", which contains three span elements.
 * Each span element represents a dot in the typing indicator animation.
 */
const TypingIndicator: React.FC = () => {
  return (
    <div className="typing-indicator">
      <span>.</span><span>.</span><span>.</span>
    </div>
  );
};

export default TypingIndicator;
