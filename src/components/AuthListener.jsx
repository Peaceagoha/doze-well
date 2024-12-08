import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { setUser, clearUser } from "../store/user";

const AuthListener = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    // Set up the onAuthStateChanged listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Only dispatch if the user is different from the current user in the store
        if (!currentUser || currentUser.id !== user.uid) {
          dispatch(
            setUser({
              id: user.uid,
              email: user.email,
              displayName: user.displayName,
            })
          );
        }
      } else {
        // Only dispatch clearUser if user is logged out and the store has user data
        if (currentUser) {
          dispatch(clearUser());
        }
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [dispatch, currentUser]);

  return null; // This component doesn't need to render anything
};

export default AuthListener;
