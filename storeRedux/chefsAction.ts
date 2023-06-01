import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { chefs } from "@/data";



const backendURL = 'https://mysicilyrestaurant-default-rtdb.firebaseio.com'

 

// export const getChefsAction = createAsyncThunk('chefs',  async() => {
  
//   const response = await axios.get('https://mysicilyrestaurant-default-rtdb.firebaseio.com/chefs.json');

//   return response.data;

//   });
interface MyChefValues {
  chefName: string;
  chefImage: string;
  chefTitle: string;
}

  export const getChefsAction = createAsyncThunk(
    "chefsAll",
     async () => {
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/users?_limit=5"
    // );
    //    const data = await response.json();
    //    console.log(data)
       const data = chefs;
    return data;
  }
  );
