import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieSlice from "./features/movieSlice";
import userSlice from "./features/userSlice";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/es/storage/session";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const rootPersistConfig = {
  key: "root",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  movie: movieSlice.reducer,
  user: persistReducer(userPersistConfig, userSlice.reducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import movieSlice from "./features/movieSlice";
// import userSlice from "./features/userSlice";

// export const store = configureStore({
//   reducer: {
// movie: movieSlice.reducer,
// user: userSlice.reducer
// },
// });
