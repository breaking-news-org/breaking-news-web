import { createContext } from "react";

export const AuthContext = createContext({
    refreshToken: null,
    accessToken: null,
    login: () => {},
    logout: () => {},
    isAuthenticated: false
})
