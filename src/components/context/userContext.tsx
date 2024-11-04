import React, { useContext } from "react";
import { User } from "../profile/type";

interface LoggedUserContextType {
    loggedUser: User | null;
    setLoggedUser: React.Dispatch<React.SetStateAction<User | null>>;
  }
  
export const LoggedUserContext = React.createContext<LoggedUserContextType | null>(null);

export function useLoggedUserContext() {
    const user = useContext(LoggedUserContext)

    if (user === null) {
        throw new Error(`user does not exist`)
    }

    return user;
}