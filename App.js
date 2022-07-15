import React, { useEffect } from "react";
import "react-native-gesture-handler";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import store from "./src/redux/store";
import { playerSetup } from "./src/utils/MusicPlayerUtil";
import Navigation from "./src/navigation/Navigation";

const persistor = persistStore(store);

const App = () => {
	useEffect(() => {
		playerSetup();
	}, []);

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Navigation />
			</PersistGate>
		</Provider>
	);
};

export default App;
