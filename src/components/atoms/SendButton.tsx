import React from 'react';
import '../../assets/styles/SendButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface SendButtonProps {
  handleSend: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({ handleSend }) => {
  return (
    <button className="send-button" onClick={handleSend}>
        <FontAwesomeIcon icon={faPaperPlane} />
    </button>
  );
};

export default SendButton;
