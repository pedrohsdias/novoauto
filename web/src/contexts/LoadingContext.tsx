import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define a interface para o contexto
interface LoadingContextProps {
  messages: string[];
  addMessage: (message: string) => void;
  removeMessage: (message: string) => void;
}

// Criação do contexto
const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

// Provedor do contexto
export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    setMessages([...messages, message]);
  }
  const removeMessage = (message: string) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg !== message));
  }

  return (
    <LoadingContext.Provider value={{messages, addMessage, removeMessage }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Hook para acessar o contexto
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
