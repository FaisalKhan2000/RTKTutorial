import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./services/dummyData";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  // don't worry just helpful for caching

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
