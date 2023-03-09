import { configureStore } from "@reduxjs/toolkit";
import relationshipReducer from "./features/relationshipSlice";

export const store = configureStore({
  reducer: { 
    relationship : relationshipReducer,
   },
});