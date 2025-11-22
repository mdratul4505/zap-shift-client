import React, { useEffect,  useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

const googleProvaider = new GoogleAuthProvider()

const AuthProvaider = ({ children }) => {

  const [user , setuser]= useState(null)
  const [loading , setloading] = useState(true)

    const registerUser =(email , password) =>{
      setloading(true)
        return createUserWithEmailAndPassword (auth , email , password)
    } 

    const signInUser = (email , password) =>{
      setloading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const signInGoogle = () =>{
      setloading(true)
      return signInWithPopup(auth , googleProvaider)
    }

    const logOut = () =>{
      setloading(true)
      return signOut(auth)

    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth , (CurrentUser)=>{
        setuser(CurrentUser)
        setloading(false)
      }) 
      return ()=>{
        unSubscribe()
      } 
    },[])

  const authInfo = {
    registerUser,
    signInUser,
    signInGoogle,
    loading,
    user,
    logOut,


  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvaider;
