import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000/api/coins';

const createRequest = url => ({ url });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: limit => createRequest(`?limit=${limit}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
