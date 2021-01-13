import React from 'react';
import { v4 as uuid } from 'uuid';

import PopUpContainer from '../components/PopUp';

interface PopUpContextData {
  addPopUp(message: Omit<PopUpMessage, 'id'>): void;
  removePopUp(id: string): void;
}

interface PopUpContextProps {
  children: JSX.Element[] | JSX.Element;
}

const PopUpContext = React.createContext<PopUpContextData>(
  {} as PopUpContextData,
);

export interface PopUpMessage {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

function PopUpProvider({ children }: PopUpContextProps): JSX.Element {
  const [messages, setMessages] = React.useState<PopUpMessage[]>([]);

  const addPopUp = React.useCallback(
    ({ icon, title, description }: Omit<PopUpMessage, 'id'>) => {
      const id = uuid();

      const popUp = {
        id,
        icon,
        title,
        description,
      };

      setMessages([...messages, popUp]);
    },
    [messages],
  );

  const removePopUp = React.useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <PopUpContext.Provider value={{ addPopUp, removePopUp }}>
      {children}
      <PopUpContainer messages={messages} />
    </PopUpContext.Provider>
  );
}

function usePopUp(): PopUpContextData {
  const context = React.useContext(PopUpContext);

  if (!context) {
    throw new Error('usePopUp must be used within a PopUpProvider');
  }

  return context;
}

export { PopUpProvider, usePopUp };
