import AsyncStorage from "@react-native-async-storage/async-storage";

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import MusicSlice from "./MusicSlice";

const reducers = combineReducers({
	music: MusicSlice
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
