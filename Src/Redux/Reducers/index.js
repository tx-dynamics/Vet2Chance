
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';


const rootReducers = combineReducers({AuthReducer: AuthReducer});


export default rootReducers



// import {combineReducers} from "redux"
// import authReducer from '../reducers/authReducer' ;
// import { persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const authConfig = {
//     key: "authReducer",
//     storage: AsyncStorage,
//   };

// export default combineReducers({
//   auth: persistReducer(authConfig, authReducer),
// });