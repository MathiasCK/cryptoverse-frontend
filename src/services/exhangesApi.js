import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://cryptoverse-backend.herokuapp.com/api/exchanges';

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
