import { createContext, useContext } from "react";

export const Themecontext = createContext({
    thememode:"light",
    darktheme:()=>{},
    lighttheme:()=>{},
})

export const themeProvider = Themecontext.Provider;

export default function useTheme(){
    return useContext(Themecontext);
}