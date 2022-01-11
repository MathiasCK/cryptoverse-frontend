// The root of the apps state
import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoDetailsApi } from '../services/cryptoDetailsApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { exchangesApi } from '../services/exhangesApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoDetailsApi.reducerPath]: cryptoDetailsApi.reducer,
    [exchangesApi.reducerPath]: exchangesApi.reducer,
  },
});
