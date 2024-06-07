import React from 'react';
import '../../assets/styles/Bubble.css';

interface BubbleProps {
  message: string;
  isUser: boolean;
  timestamp: string;
}

const Bubble: React.FC<BubbleProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={`bubble ${isUser ? 'user' : 'ai'}`}>
      <div> {message} </div>
      <div className="message-timestamp">{timestamp}</div>
    </div>
  );
};

export default Bubble;
