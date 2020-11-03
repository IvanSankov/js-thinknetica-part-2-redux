import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import RestDbMiddleware from "./middleware/RestDbMiddleware";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(RestDbMiddleware)
});

export default store;