"use client";

import React, { createContext, useState, useEffect } from "react";
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
  user: User; // ✅ Tambahkan ini sesuai struktur cookie kamu
}

interface AuthContextType {
  user: AuthData | null;
  setUser: React.Dispatch<React.SetStateAction<AuthData | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthData | null>(null);

  const checkCookie = () => {
    const stored = Cookies.get("authData");
    if (stored) {
      try {
        const parsed: AuthData = JSON.parse(stored);
        // hanya update jika berbeda
        setUser((prev) => {
          if (JSON.stringify(prev) !== JSON.stringify(parsed)) return parsed;
          return prev;
        });
      } catch {
        Cookies.remove("authData");
        setUser(null);
      }
    } else {
      setUser((prev) => (prev ? null : prev));
    }
  };

  // ✅ Jalankan setelah commit render pertama (hindari setState sinkron)
  useEffect(() => {
    const timer = setTimeout(checkCookie, 0);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Sinkronisasi antar-tab browser
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "authData") {
        checkCookie();
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // ✅ Polling ringan untuk mendeteksi perubahan cookie lokal
  useEffect(() => {
    const interval = setInterval(checkCookie, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
