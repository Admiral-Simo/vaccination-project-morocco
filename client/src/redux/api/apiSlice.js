import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getChildren: builder.query({
      query: () => "/children",
    }),
    getSexStat: builder.query({
      query: () => "/sex-stats",
    }),
  }),
});

export const { useGetChildrenQuery, useGetSexStatQuery } = api;
