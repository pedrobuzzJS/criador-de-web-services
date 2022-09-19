import React, { createContext, useState } from "react";
interface AuthContextData{
    signed: Boolean;
    user: object | null;
    // signIn(): Promise<void>;
    // signOut(): void;
};

const AuthContext = createContext<AuthContextData>( {} as AuthContextData );

const AuthProvider: React.FC = () => {
    const [ user, setUser ] = useState<object | null>(null);

    // async function singIn() {
    //     const response = await AuthContext.signIn();
    //     setUser(response.user);
    // }

    return (
        <AuthContext.Provider value={{signed: !!user, user}}>
        {/* <AuthContext.Provider value={{signed: !!user, user, singIn, signOut}}> */}
            {/* {children} */}
        </AuthContext.Provider>
    );
};

export default AuthContext;