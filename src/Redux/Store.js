
import { configureStore, combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
    auth: authReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export default store;
  