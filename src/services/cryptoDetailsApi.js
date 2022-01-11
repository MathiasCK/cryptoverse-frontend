import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '103c4f49b6msh4e19359526c2f79p1ceb74jsn59cc64fc64a8',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = url => ({ url, headers: cryptoApiHeaders });

export const cryptoDetailsApi = createApi({
  reducerPath: 'cryptoDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getCryptoDetails: builder.query({
      query: coinId => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
  }),
});

export const { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } =
  cryptoDetailsApi;
