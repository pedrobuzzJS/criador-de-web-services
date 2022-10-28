import React, { createContext, useState, useEffect, PropsWithChildren, useContext } from "react";
import Auth from "../services/auth";
import api from "../services/api";

interface AuthInterface extends PropsWithChildren {
    signed: boolean;
    user: object | null;
    loginLoaging: boolean;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => void;
};

interface AuthProviderProps {
    children: React.ReactNode | null;
};

const AuthContext = createContext<AuthInterface>({} as AuthInterface);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [ user, setUser ] = useState<object | null>(null);
    const [ loginLoaging, setLoginLoaging ] = useState<boolean>(false);

    useEffect( () => {
        const storageUser = localStorage.getItem("USER");
        const storageToken = localStorage.getItem("TOKEN");

        if (storageUser && storageToken) {
            api.defaults.headers.common['Authorization'] = `Bearer ${String(storageToken)}`;;
            setUser(JSON.parse(storageUser));
            setLoginLoaging(false);
        };
    }, [] );

    async function signIn(username: string, password: string) {
        const AuthController = await new Auth();
        const response = await AuthController.signIn(username, password);
        api.defaults.headers.common['Authorization'] = `Bearer ${String(response.TOKEN)}`;;
        await localStorage.setItem("USER" , JSON.stringify(response.USER));
        await localStorage.setItem("TOKEN" , String(response.TOKEN));
    };

    async function signOut() {
        return setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            signed: Boolean(user),
            user: user,
            signIn: signIn,
            signOut: signOut,
            loginLoaging: loginLoaging
        }}>
            {children}
        </AuthContext.Provider>
        
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
};