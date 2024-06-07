/**
 * Bubble.tsx
 * 
 * This file contains the Bubble component of the application.
 * It imports the styles from Bubble.css.
 * 
 * The file defines an interface: BubbleProps.
 * 
 * @module Bubble.tsx
 */
import React from 'react';
import '../../assets/styles/Bubble.css';

/**
 * BubbleProps interface represents the props for the Bubble component.
 * It includes the message text, a flag indicating if the message is from the user, and a timestamp.
 */
interface BubbleProps {
  message: string;
  isUser: boolean;
  timestamp: string;
}

/**
 * Bubble component displays a chat bubble with a message and a timestamp.
 * It returns a div containing the message and the timestamp. The div's class depends on whether the message is from the user or the AI.
 */
const Bubble: React.FC<BubbleProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={`bubble ${isUser ? 'user' : 'ai'}`}>
      <div> {message} </div>
      <div className="message-timestamp">{timestamp}</div>
    </div>
  );
};

export default Bubble;
