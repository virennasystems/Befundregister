
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [role, setRole] = useState('patient');
  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
