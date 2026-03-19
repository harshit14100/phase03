import { createContext, type Dispatch, type SetStateAction } from "react";

export type UserType = {
    username: string,
    password: string
}

interface contexttype {
    setUser:Dispatch<SetStateAction<UserType>>;
    User:UserType;
}

export const UserContext = createContext<contexttype|undefined>(undefined)
