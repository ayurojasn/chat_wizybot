import React from 'react';
import '../../assets/styles/InputField.css';

interface InputFieldProps {
  message: string;
  setMessage: (message: string) => void;
  handleSend: () => void;
}

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
