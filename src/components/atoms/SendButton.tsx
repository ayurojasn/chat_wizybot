/**
 * SendButton.tsx
 * 
 * This file contains the SendButton component of the application.
 * 
 * The file defines an interface: SendButtonProps.
 * 
 * @module SendButton.tsx
 */

import React from 'react';
import '../../assets/styles/SendButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
/**
 * 
 * SendButtonProps interface represents the props for the SendButton component.
 * It includes a function to handle sending the message.
 */
interface SendButtonProps {
  handleSend: () => void;
}

/**
 * SendButton component is a button to send a message.
 * It returns a button with an onClick event. When the button is clicked, it calls the handleSend function.
 */
const SendButton: React.FC<SendButtonProps> = ({ handleSend }) => {
  return (
    <button className="send-button" onClick={handleSend}>
        <FontAwesomeIcon icon={faPaperPlane} />
    </button>
  );
};

export default SendButton;
