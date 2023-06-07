import { createSlice } from "@reduxjs/toolkit";
import { messagingAction } from "./contactUsAction";
interface contactsValues {
    name: string;
    email: string;
    subject: string;
    message: string;
  
}
export type contactState = {
  contact: contactsValues[];
  loading: boolean;
  error: boolean;
  success: boolean;
};
const initialState: contactState = {
  contact: [], // for user object
    loading: false,
    
    error: false,
    success: false, // for monitoring the registration process.
  }
const contactUsSlice = createSlice({
    name: "messaging",
    initialState,
    reducers: {
         
    },
    extraReducers: (builder) => {
        builder.addCase(messagingAction.pending, (state) => {
          state.loading = true
        })
    
        builder.addCase(messagingAction.fulfilled, (state, { payload }) => {
          state.contact = payload
        })
    
        builder.addCase(messagingAction.rejected, (state) => {
          state.loading = false;
          // Note: I updated the state here
        })
      }
    });

 
export default contactUsSlice.reducer;