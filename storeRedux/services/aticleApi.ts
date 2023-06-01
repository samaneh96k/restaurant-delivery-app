import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const backendURL = 'https://dev.to/api/articles?_limit=5'
type Article = {
  id: number;
  description: string;
  image: string;
  title: string;
  cover_image: string;
  readable_publish_date: string;
};

export const articleApi = createApi({
  reducerPath: "articleApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl:'https://dev.to/api/articles?_limit=5',
  }),
  endpoints: (builder) => ({
    getArticle: builder.query<Article[], null>({
      query: () => "article",
    }),
    getArticleById: builder.query<Article, { id: string }>({
      query: ({ id }) => `article/${id}`,
    }),
  }),
});

export const { useGetArticleQuery, useGetArticleByIdQuery } = articleApi;