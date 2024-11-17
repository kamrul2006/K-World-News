/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { Auth as auth } from "../Firebase/Firebase.config";


//----------------the context here------------------
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    // console.log(user)
    const [loading, setLoading] = useState(true)


    //-------- create user with email-password------------
    const CreateUserByMailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //--------------------------Login user with email password-------
    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //-----------------------user sign out----------------
    const UserSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                // console.log(error)
            });
    }

    //--------------------updating Profile------------------
    const updatedProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    //------------value here--------------------------
    const authInfo = {
        user,
        setUser,
        CreateUserByMailPass,
        LoginUser,
        UserSignOut,
        loading,
        updatedProfile
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;