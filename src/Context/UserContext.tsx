/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from "react";
import { UserData } from "../Hooks/useAuth";

interface UserContextType {
  user: UserData | null;
  loginUser(userData: UserData): void;
  logoutUser(): void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);

  function loginUser(userData: UserData) {
    setUser(userData);
  }

  function logoutUser() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
