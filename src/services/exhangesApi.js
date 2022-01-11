import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000/api/exchanges';

const createRequest = url => ({ url });

export const exchangesApi = createApi({
  reducerPath: 'exchangesApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getExchanges: builder.query({
      query: () => createRequest(`/`),
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;
