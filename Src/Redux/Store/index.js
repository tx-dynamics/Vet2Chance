import {createStore , compose , applyMiddleware}  from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { persistStore } from "redux-persist";

const store = createStore(reducers, {} , compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default store;
