"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
// Entferne User, onAuthStateChanged, auth

type AuthContextType = {
  user: any | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false); // Kein Auth-Loading mehr

  // TODO: Hier später eigene Auth-Logik einbauen

  const value = { user, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
