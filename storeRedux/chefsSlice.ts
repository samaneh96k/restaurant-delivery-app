import { createSlice } from "@reduxjs/toolkit";
import { getChefsAction } from "./chefsAction";

interface MyChefValues {
  chefName: string;
  chefImage: string;
  chefTitle: string;
}

export type chefState = {
  chefs: MyChefValues[];
  loading: boolean;
  error: boolean;
  success: boolean;
};
const initialState: chefState = {
  chefs: [],
  loading: false,
  error: false,
  success: false
};
const chefsSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder.addCase(getChefsAction.pending, state => {
      state.loading = true;
    });

    builder.addCase(getChefsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.chefs = action.payload;
      //state.entities.push(...action.payload);
      //state.chefInfo.upsertMany(state, action.payload)
    });

    builder.addCase(getChefsAction.rejected, state => {
      state.loading = false;
      // Note: I updated the state here
    });
  }
});

export default chefsSlice.reducer;
