"use client";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { LoginRequest } from "../data/dto/request/LoginRequest";
import { RegisterRequest } from "../data/dto/request/RegisterRequest";
import { RegisterResponse } from "../data/dto/response/RegisterResponse";
import { LoginResponse } from "../data/dto/response/LoginResponse";

export interface DecodedToken {
  id: number;
  iat: number;
  exp: number;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { user, setUser } = context;

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  // 🔹 LOGIN
  const login = async (loginReq: LoginRequest): Promise<LoginResponse> => {
    try {
      if (!API_URL) {
        throw new Error("API_URL belum diatur di file .env");
      }

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(loginReq)
      });

      const json: LoginResponse = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(
          json?.message || "Login gagal, periksa kembali data Anda."
        );
      }

      if (!json.token) {
        throw new Error("Token tidak ditemukan di response.");
      }

      const decoded = jwtDecode<DecodedToken>(json.token); // Sekarang aman ✅

      const authData = {
        token: json.token,
        decoded,
        user: json.user
      };

      Cookies.set("authData", JSON.stringify(authData), {
        expires: 7,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        path: "/"
      });

      return json;
    } catch (err) {
      console.error("Login error:", err);
      throw err;
    }
  };

  // 🔹 REGISTER
  const register = async (
    request: RegisterRequest
  ): Promise<RegisterResponse> => {
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(request)
      });

      const json: RegisterResponse = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json?.message || "Registration failed");
      }

      return json;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Registration error:", err.message);
      throw new Error(err.message || "Something went wrong");
    }
  };

  // 🔹 LOGOUT
  const logout = async () => {
    try {
      Cookies.remove("authData", { path: "/" });
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return {
    user,
    login,
    register,
    logout
  };
}
