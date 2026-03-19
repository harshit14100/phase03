import { UserContext, type UserType } from "./Context";
import { useState, type ReactNode } from "react";

export const UserContextProvider =({children}:{children: ReactNode})=>{
    const [User, setUser] = useState({} as UserType)
    return(
        <UserContext.Provider 
        value={{
            User,
            setUser
        }}>
        {children }
        </UserContext.Provider>
    )
} 