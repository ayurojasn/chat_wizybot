/**
 * ChatWindow.tsx
 * 
 * This file contains the main chat window component for the application.
 * It imports several other components such as Bubble, ChatInput, TypingIndicator, and ProductCarousel.
 * It also includes the styles from ChatWindow.css.
 * 
 * The file defines two interfaces: Message and Product.
 * 
 * @module ChatWindow.tsx
 */

import React, { useState, useEffect, useRef } from 'react';
import Bubble from '../atoms/Bubble';
import ChatInput from '../molecules/ChatInput';
import TypingIndicator from '../atoms/TypingIndicator';
import ProductCarousel from '../molecules/ProductCarousel';
import '../../assets/styles/ChatWindow.css';

/**
 * Message interface represents a single message in the chat.
 * It includes the text of the message, a flag indicating if the message is from the user,
 * an optional flag indicating if the message is a product recommendation,
 * an optional array of products, and a timestamp.
 */
interface Message {
  text: string;
  isUser: boolean;
  isProductRecommendation?: boolean;
  products?: Product[];
  timestamp: string;
}

/**
 * Product interface represents a single product.
 * It includes the id, display title, image URL, price, and URL of the product.
 */
interface Product {
  id: string;
  displayTitle: string;
  imageUrl: string;
  price: string;
  url: string;
}

const ChatWindow: React.FC = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const month = now.toLocaleString('default', { month: 'long' });
  const day = now.getDate();
  const timestamp = `${timeString} | ${month} ${day}`;

  const [messages, setMessages] = useState<Message[]>([{ text: "Hello there! Do you need any help?", isUser: false, timestamp }]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://api.wizybot.com/products/demo-product-list');
    const data = await response.json();
    const shuffledProducts = data.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffledProducts.slice(0, 3);
    return selectedProducts;
  };

  const handleSend = async () => {
    if (currentMessage.trim()) {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const month = now.toLocaleString('default', { month: 'long' });
      const day = now.getDate();
      const timestamp = `${timeString} | ${month} ${day}`;

      setMessages([...messages, { text: currentMessage, isUser: true, timestamp }]);
      setCurrentMessage('');
      setIsTyping(true);

      if (currentMessage.toLowerCase() === 'i want product recommendations') {
        const products = await fetchProducts();
        setTimeout(() => {
          setIsTyping(false);
          setMessages((prevMessages) => [...prevMessages, { text: '', isUser: false, isProductRecommendation: true, products, timestamp }]);
        }, 4000);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setMessages((prevMessages) => [...prevMessages, { text: "Lorem ipsum dolor sit amet...", isUser: false, timestamp}]);
        }, 4000);
      }
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className="chat-window" id="chat-window">
      <div className="messages">
        {messages.map((message, index) => (
          message.isProductRecommendation ? (
            <ProductCarousel key={index} products={message.products || []} />
          ) : (
            <Bubble key={index} message={message.text} isUser={message.isUser} timestamp={message.timestamp}/>
          )
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput message={currentMessage} setMessage={setCurrentMessage} handleSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
