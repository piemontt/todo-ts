import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todoSlice";
import { loadState, saveState } from "./localstorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: todoSlice,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
