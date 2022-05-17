import * as React from 'react';
import { SafeAreaView } from 'react-native';
import MainNav from './Src/Navigation/MainNav';

import { Provider } from 'react-redux';
import store from './Src/Redux/Store';
import {useSelector} from 'react-redux'

// console.disableYellowBox = true;
function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <SafeAreaView style={{ flex: 1 }}>
          <MainNav />
        </SafeAreaView>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
