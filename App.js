import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import store from './frontend/redux/store';

import {playerSetup} from './frontend/helpers/playerSetup';
import Navigation from './frontend/components/Navigation/Navigation';

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
