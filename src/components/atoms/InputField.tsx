/**
 * InputField.tsx
 * 
 * This file contains the InputField component of the application.
 * 
 * The file defines an interface: InputFieldProps.
 * 
 * @module InputField.tsx
 */

import React from 'react';
import '../../assets/styles/InputField.css';

/**
 * InputFieldProps interface represents the props for the InputField component.
 * It includes the current message, a function to set the message, and a function to handle sending the message.
 */
interface InputFieldProps {
  message: string;
  setMessage: (message: string) => void;
  handleSend: () => void;
}

/**
 * InputField component is an input field for the chat.
 * It returns an input field with the type of text. The value of the input field is the current message.
 * When the value of the input field changes, it calls the setMessage function with the new value.
 * When the Enter key is pressed in the input field, it calls the handleSend function.
 */
const InputField: React.FC<InputFieldProps> = ({ message, setMessage, handleSend }) => {
  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <input
      className="input-field"
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={onEnterPress}
      placeholder="Write a message..."
    />
  );
};

export default InputField;
