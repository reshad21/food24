import React, { createContext, useContext } from 'react';

const AUTH_CONTEXT = createContext();

const AuthProvider = ({ children }) => {
    const firebase = 'firebase';
    const value = {
        firebase
    }






    
    return (
        <AUTH_CONTEXT.Provider value={value}>{children}</AUTH_CONTEXT.Provider>
    );
};

export const useFirebaseAuth = () => {
    const context = useContext(AUTH_CONTEXT);
    return context;
}

export default AuthProvider;