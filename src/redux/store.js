import AsyncStorage from "@react-native-async-storage/async-storage";

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import UserSlice from "./UserSlice";
import MusicSlice from "./MusicSlice";

const reducers = combineReducers({
	music: MusicSlice,
	UserSlice: UserSlice
});

const persistConfig = {
	key: "root",
	storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
});

export default store;
