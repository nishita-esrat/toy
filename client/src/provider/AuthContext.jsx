import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
// make authContext to access all over the component
export const authContext = createContext();
const AuthContext = ({ children }) => {
  // google provider
  const providerGoogle = new GoogleAuthProvider();
  // auth
  const auth = getAuth(app);
  // to set log in user
  const [user, setUser] = useState(null);
  // loading
  const [loading, setLoading] = useState(true);
  // to make new user function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // to add name ,photo function
  const nameAndPhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // log in function
  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log in with google function
  const signInWithGoogle = () => {
    return signInWithPopup(auth, providerGoogle);
  };
  // log out function
  const logOut = () => {
    return signOut(auth);
  };
  // to set auth provider value
  const authObj = {
    user,
    loading,
    createUser,
    nameAndPhoto,
    signUser,
    signInWithGoogle,
    logOut,
  };
  // to check user is log in or not
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <authContext.Provider value={authObj}>{children}</authContext.Provider>
  );
};

export default AuthContext;
