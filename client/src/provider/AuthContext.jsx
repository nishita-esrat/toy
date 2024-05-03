import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
export const authContext = createContext();
const AuthContext = ({ children }) => {
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
  const authObj = {
    user,
    setUser,
    loading,
    createUser,
    nameAndPhoto,
  };
  return (
    <authContext.Provider value={authObj}>{children}</authContext.Provider>
  );
};

export default AuthContext;
