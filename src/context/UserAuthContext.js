import { createContext, useContext, useEffect, useState } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../fireBaseConfig";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function googleSignIn() { 
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider)
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
        setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
        value={{ user, logIn, signUp, logOut, googleSignIn }}
        >
        {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}