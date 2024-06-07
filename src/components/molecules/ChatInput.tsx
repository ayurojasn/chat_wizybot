import React from 'react';
import InputField from '../atoms/InputField';
import SendButton from '../atoms/SendButton';
import '../../assets/styles/ChatInput.css';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSend: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ message, setMessage, handleSend }) => {
  return (
    <div className="chat-input">
      <InputField message={message} setMessage={setMessage} handleSend={handleSend} />
      <SendButton handleSend={handleSend} />
    </div>
  );
};

export default ChatInput;
