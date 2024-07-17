import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [initialMessage, setInitialMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const setInitialChatMessage = (message) => {
    setInitialMessage(message);
  };

  return (
    <ChatContext.Provider value={{ message, handleChange, initialMessage, setInitialChatMessage }}>
      {children}
    </ChatContext.Provider>
  );
};