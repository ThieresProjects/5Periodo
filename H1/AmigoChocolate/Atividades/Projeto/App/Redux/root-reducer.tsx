import { combineReducers } from "redux";
import usuarioReducer from './Usuario/reducer'

const rootReducer = combineReducers({ usuarioReducer });

export default rootReducer;