import { createContext } from "react";
import io from "socket.io-client";

export const socket = io(import.meta.env.VITE_CHAT_SERVER_URL, {
  withCredentials: true,
});

const SocketContext = createContext();
export const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useGlobalContext = () => useContext(SocketContext);
