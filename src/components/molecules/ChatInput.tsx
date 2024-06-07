/**
 * ChatInput.tsx
 * 
 * This file contains the ChatInput component of the application.
 * It imports the SendButton component and the styles from ChatInput.css.
 * 
 * The file defines an interface: ChatInputProps.
 * 
 * @module ChatInput.tsx
 */
import React from 'react';
import InputField from '../atoms/InputField';
import SendButton from '../atoms/SendButton';
import '../../assets/styles/ChatInput.css';

/**
 * ChatInputProps interface represents the props for the ChatInput component.
 * It includes the current message, a function to set the message, and a function to handle sending the message.
 */
interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSend: () => void;
}

/**
 * ChatInput component is the input field for the chat.
 * It returns a div containing an InputField and a SendButton.
 */
const ChatInput: React.FC<ChatInputProps> = ({ message, setMessage, handleSend }) => {
  return (
    <div className="chat-input">
      <InputField message={message} setMessage={setMessage} handleSend={handleSend} />
      <SendButton handleSend={handleSend} />
    </div>
  );
};

export default ChatInput;
