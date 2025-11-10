"use client";

import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface DecodedToken {
  id: number;
  iat: number;
  exp: number;
}

export interface AuthData {
  token: string;
  decoded: DecodedToken;
}

interface AuthContextType {
  user: AuthData | null;
  setUser: React.Dispatch<React.SetStateAction<AuthData | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthData | null>(() => {
    const stored = Cookies.get("authData");
    return stored ? JSON.parse(stored) : null;
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
