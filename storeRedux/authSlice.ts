import { createSlice } from "@reduxjs/toolkit";
import { registerUserAction } from "./authActions";
interface MyFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  
  }
const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
         
    },
    extraReducers: (builder) => {
        builder.addCase(registerUserAction.pending, (state) => {
          state.loading = true
        })
    
        builder.addCase(registerUserAction.fulfilled, (state, { payload }) => {
          state.userInfo = payload
        })
    
        builder.addCase(registerUserAction.rejected, (state) => {
          state.loading = false;
          // Note: I updated the state here
        })
      }
    });

 
export default authSlice.reducer;