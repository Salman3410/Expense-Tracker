import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext(null);

const USERS_KEY = "@users";
const SESSION_KEY = "@session";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const session = await AsyncStorage.getItem(SESSION_KEY);
        if (session) {
          setUser(JSON.parse(session));
        }
      } catch (error) {
        console.log("Session load error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSession();
  }, []);

  const register = async (name, email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!name || !cleanEmail || !cleanPassword) {
      alert("All fields are required");
      return;
    }

    const storedUsers = await AsyncStorage.getItem(USERS_KEY);
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const exists = users.find((u) => u.email === cleanEmail);
    if (exists) {
      alert("Email already registered");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      name: name.trim(),
      email: cleanEmail,
      password: cleanPassword,
    };

    const updatedUsers = [...users, newUser];

    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(newUser));

    setUser(newUser);
  };

  const login = async (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    const storedUsers = await AsyncStorage.getItem(USERS_KEY);
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const foundUser = users.find(
      (u) => u.email === cleanEmail && u.password === cleanPassword,
    );

    console.log("Login attempt:", { cleanEmail, cleanPassword });
    console.log("Users in storage:", users);

    if (!foundUser) {
      const emailExists = users.some((u) => u.email === cleanEmail);
      if (emailExists) {
        alert("Incorrect password");
      } else {
        alert("Email not registered");
      }
      return;
    }

    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(foundUser));
    setUser(foundUser);
  };

  const logout = async () => {
    await AsyncStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
