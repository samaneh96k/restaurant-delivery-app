import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'https://mysicilyrestaurant-default-rtdb.firebaseio.com/user.json'
interface MyFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

}
export const registerUserAction = createAsyncThunk(
    'auth/signup',
    async ({name, email, password,confirmPassword }:MyFormValues,{ rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${backendURL}`,
                {name, email, password,confirmPassword },
                config
            )
        // store user's token in local storage
      //localStorage.setItem('userToken', data.name)
      return data
    } catch (error:any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
// export const loginUserAction = createAsyncThunk(
//   'auth/signin',
//   async ({ email, password }:MyFormValues,{ rejectWithValue }) => {
//       try {
//           // configure header's Content-Type as JSON
//           const config = {
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//           }
//           const { data } = await axios.get(
//               `${backendURL}`,
//               {email},config
//               )
//       // store user's token in local storage
//     localStorage.getItem('userToken')
//     return data
//   } catch (error:any) {
//     // return custom error message from API if any
//     if (error.response && error.response.data.message) {
//       return rejectWithValue(error.response.data.message)
//     } else {
//       return rejectWithValue(error.message)
//     }
//   }
// }
// )