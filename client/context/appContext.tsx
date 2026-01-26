"use client";
import API_BASE_URL from "@/lib/api";
import { useRouter } from "next/navigation";
import {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { mutate } from "swr";
type UserType = { _id: string; email: string; name: string };

type ContextType = {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  login: (email: string, password: string) => void;
  signIn: (name: string, email: string, password: string) => void;
  addFavroiteMovie: (_id: string) => Promise<boolean>;
  removeFavroiteMovie: (_id: string) => Promise<boolean>;
} | null;

const appContext = createContext<ContextType>(null);

export default function AppContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);

  const router = useRouter();
  async function fetchUser() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/me`, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`HTTP server error, Status Code: ${response.status}`);
      }
      const data = await response.json();
      if (!data.s) {
        setUser(null);
      }
      setUser(data.d);
    } catch (error) {
      const errMsg =
        error instanceof Error ? error.message : "Something went wrong";
      console.log(errMsg);
    }
  }
  useEffect(function () {
    fetchUser();
  }, []);

  async function signIn(name: string, email: string, password: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
        body: JSON.stringify({ name, email, password }),
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.s) {
        setUser(data.user);
        router.push("/");
      } else {
        console.log(data.m);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function login(email: string, password: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
        body: JSON.stringify({ email, password }),
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.s) {
        setUser(data.user);
        router.push("/");
      } else {
        console.log(data.m);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addFavroiteMovie(_id: string): Promise<boolean> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/movies/addFavoriteMovie`,
        {
          body: JSON.stringify({ favoriteMovieId: _id }),
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
        },
      );
      const data = await response.json();
      if (data.s) {
        console.log("Movie Added");
        mutate("/api/movies/favourites");
        return true;
      } else {
        console.log(data.m);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function removeFavroiteMovie(_id: string): Promise<boolean> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/movies/removeFavoriteMovie`,
        {
          body: JSON.stringify({ favoriteMovieId: _id }),
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
        },
      );
      const data = await response.json();
      if (data.s) {
        mutate("/api/movies/favourites");
        console.log("Movie Removed");
        return true;
      } else {
        console.log(data.m);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <appContext.Provider
      value={{
        user,
        setUser,
        login,
        signIn,
        addFavroiteMovie,
        removeFavroiteMovie,
      }}
    >
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
