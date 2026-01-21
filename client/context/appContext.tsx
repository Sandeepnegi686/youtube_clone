"use client";

import {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
type UserType = { _id: string; email: string };

type ContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType | null>>;
} | null;

const appContext = createContext<ContextType>(null);

export default function AppContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);

  //request
  authFetch.interceptors.request.use(
    function (config) {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    },
  );

  //response
  authFetch.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status == 400) {
        logoutUser();
        console.log(error);
      }
      return Promise.reject(error);
    },
  );

  return (
    <appContext.Provider value={{ user, setUser }}>
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
