"use client"

import { SessionProvider } from "next-auth/react";
import { SessionProviderProps } from "next-auth/react";

const AuthProvider = ({children}:SessionProviderProps) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuthProvider