import AsyncStorage from '@react-native-async-storage/async-storage';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducers from '../Reducers/index'
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['AuthReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer,  applyMiddleware(thunk));
const persistor = persistStore(store);
export {store, persistor};


// import {legacy_createStore as createStore , compose , applyMiddleware}  from 'redux'
// import reducers from '../Reducers/AuthReducer'
// import thunk from 'redux-thunk'
// import { persistStore } from "redux-persist";

// const store = createStore(reducers, {} , compose(applyMiddleware(thunk)));
// export const persistor = persistStore(store);

// export default store;
