"use client";

import API_BASE_URL from "@/lib/api";
import axios from "axios";
import { redirect } from "react";
import {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
type UserType = { _id: string; email: string };

type ContextType = {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  login: (email: string, password: string) => void;
} | null;

const appContext = createContext<ContextType>(null);
const API = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
});

export default function AppContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(function () {
    fetch(`${API}/auth/me`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data.d));
    // .catch(() => (window.location.href = "/auth"));
  }, []);

  async function login(email: string, password: string) {
    try {
      const { data } = await API.post(`/auth/login`, {
        email,
        password,
      });
      const { user } = data;
      console.log(user);
      setUser(user);
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <appContext.Provider value={{ user, setUser, login }}>
      {children}
    </appContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("Context use is out of scope");
  }
  return context;
}

export { useAppContext };
