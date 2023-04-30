import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'https://mysicilyrestaurant-default-rtdb.firebaseio.com/message.json'
interface MyFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;

}
export const messagingAction = createAsyncThunk(
    'messaging',
    async ({name, email, subject,message }:MyFormValues,{ rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${backendURL}`,
                {name, email,  subject,message },
                config
            )

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
