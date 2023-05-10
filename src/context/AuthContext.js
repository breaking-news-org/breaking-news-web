import { createContext } from "react";

function noop() {}

export const AuthContext = createContext({
    refreshToken: null,
    accessToken: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})
