import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const firebaseContext = UseFirebase();   
    return (
        <AuthContext.Provider value={firebaseContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;