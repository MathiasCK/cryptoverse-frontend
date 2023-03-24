import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = `${process.env.REACT_APP_BASE_URL}/api/news/search`;

const createRequest = url => ({url});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getCryptoNews: builder.query({
      query: ({count}) => createRequest(`?count=${count}`),
    }),
  }),
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;
