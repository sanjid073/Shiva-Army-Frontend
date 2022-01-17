import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const auth = getAuth();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //  get email input value
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  //  get password input value
  const getPassWord = (e) => {
    setPassword(e.target.value);
  };

  // sign in with email and password
  const SignInWithEmail = (e) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  logout
  const Logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //  tracker for crurent user
  useEffect(() => {
    onAuthStateChanged(auth, (Signeduser) => {
      if (Signeduser) {
        setUser(Signeduser);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    Logout,
    error,
    getPassWord,
    getEmail,
    SignInWithEmail,
    isLoading,
    setIsLoading,
    setError,
    setUser,
  };
};

export default UseFirebase;
