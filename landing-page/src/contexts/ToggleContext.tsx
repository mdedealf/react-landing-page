import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the context type for isOpen and setIsOpen
interface ToggleContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Create the context with an undefined initial value
const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// Define a custom hook to use the context easily
export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }
  return context;
};

// Define the provider component that will wrap the app
interface ToggleProviderProps {
  children: ReactNode;
}

export const ToggleProvider: React.FC<ToggleProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ToggleContext.Provider>
  );
};