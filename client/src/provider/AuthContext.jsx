import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.init";
export const authContext = createContext();
const AuthContext = ({ children }) => {
  const providerGoogle = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const nameAndPhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, providerGoogle);
  };
  const authObj = {
    user,
    setUser,
    loading,
    createUser,
    nameAndPhoto,
    signUser,
    signInWithGoogle,
  };

  return (
    <authContext.Provider value={authObj}>{children}</authContext.Provider>
  );
};

export default AuthContext;
