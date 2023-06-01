import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


//const backendURL = 'https://mysicilyrestaurant-default-rtdb.firebaseio.com'
type Chef = {
  id: number;
  chefImage
: string;
  chefName
: string;
chefTitle
: string;
};

export const chefApi = createApi({
  reducerPath: "chefApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl:"https://mysicilyrestaurant-default-rtdb.firebaseio.com",
  }),
  endpoints: (builder) => ({
    getChef: builder.query<Chef[], null>({
      query: () => "chefs.json",
    }),
    getChefById: builder.query<Chef, { id: string }>({
      query: ({ id }) => `chefs.json/${id}`,
    }),
  }),
});

export const { useGetChefQuery, useGetChefByIdQuery } = chefApi;