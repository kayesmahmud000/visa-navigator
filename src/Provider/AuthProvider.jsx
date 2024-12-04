import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
export  const authContext =createContext(null)


const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const provider= new GoogleAuthProvider()
    const [users ,setUsers]=useState(null)
    const [loading, setLoading]=useState(true)

    const handleCreateUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleGoogle=()=>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const handleLogin= (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignout=()=>{
        setLoading(true)
        signOut(auth)
    }

    const handleUpdateUser=(updateData)=>{
        return updateProfile( auth.currentUser , updateData)
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth , currentUser=>{
            setUsers(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo ={
        users,
        setUsers,
        loading,
        setLoading,
        handleCreateUser,
        handleGoogle,
        handleLogin,
        handleSignout,
        handleUpdateUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;