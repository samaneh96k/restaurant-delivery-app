import { createSlice } from "@reduxjs/toolkit";
import { registerUserAction } from "./authActions";
import { messagingAction } from "./contactUsAction";
interface MyFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
  
  }
const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }
const authSlice = createSlice({
    name: "messaging",
    initialState,
    reducers: {
         
    },
    extraReducers: (builder) => {
        builder.addCase(messagingAction.pending, (state) => {
          state.loading = true
        })
    
        builder.addCase(messagingAction.fulfilled, (state, { payload }) => {
          state.userInfo = payload
        })
    
        builder.addCase(messagingAction.rejected, (state) => {
          state.loading = false;
          // Note: I updated the state here
        })
      }
    });

 
export default authSlice.reducer;