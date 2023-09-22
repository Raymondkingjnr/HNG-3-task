import { createSlice } from "@reduxjs/toolkit";
import firebaseAuth from "../firebase/config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import {
  addUserLocalStorage,
  getUserFromLocalStorage,
  removeLocalStorage,
} from "../utils/LocalStorage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromLocalStorage(),
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logOutUser: (state) => {
      state.user = null;
      removeLocalStorage();
      state.isLoading = false;
    },
  },
});

export const { setUser, setLoading, setError, logOutUser } = authSlice.actions;

export const signIn = (email, password) => async (dispatch) => {
  //   dispatch(setLoading(true));
  //   firebase.auth;
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      addUserLocalStorage(user);
      dispatch(setUser(user));
      dispatch(setLoading(true));
      console.log(user);
    })

    .catch((error) => {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
      console.log(error);
    });
};

export const signUp = (email, password) => async (dispatch) => {
  //   dispatch(setLoading(true));
  if (!email || !password) {
    //   toast.error("incomplete form");
    return;
  }
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      addUserLocalStorage(user);
      console.log(user);
    })
    .then(() => {
      // toast.success("User created successfully");
    })
    .then(() => {
      // After updating profile
      const user = updateCurrentUser;
      dispatch(setUser(user));
      dispatch(setLoading(true));
    })
    .catch((error) => {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
      console.log(error);
    });
};

export default authSlice.reducer;
