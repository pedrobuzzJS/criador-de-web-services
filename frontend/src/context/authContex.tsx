import React, { createContext, useState, useEffect, PropsWithChildren, useContext } from "react";
import Auth from "../services/auth";
import api from "../services/api";

interface AuthInterface extends PropsWithChildren {
    signed: boolean;
    permissions?: number[];
    user: object | null;
    loginLoaging: boolean;
    signIn: () => Promise<void>;
    signOut: () => void;
};

interface AuthProviderProps extends PropsWithChildren {};

const AuthContext = createContext<AuthInterface>({} as AuthInterface);

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [ user, setUser ] = useState<object | null>(null);
    const [ loginLoaging, setLoginLoaging ] = useState<boolean>(true);

    useEffect( () => {
        async function loadLocalStorageData() {
            const storageUser = localStorage.getItem("USER");
            const storageToken = localStorage.getItem("TOKEN");

            if (storageUser && storageToken) {
                // api.defaults.headers["Authorization"] = `Bearer ${response.token}`;
                setUser(JSON.parse(storageUser));
                setLoginLoaging(false);
            };
        };
    } );

    async function signIn() {
        const AuthController = await new Auth();
        const response = await AuthController.signIn();

        // api.defaults.headers["Authorization"] = `Bearer ${response.token}`;
        await localStorage.setItem("USER" , "Dawdwa");
        await localStorage.setItem("TOKEN" , "Dawdwa");
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