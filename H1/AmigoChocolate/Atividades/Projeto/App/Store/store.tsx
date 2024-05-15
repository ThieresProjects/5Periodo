// import { createStore } from 'redux'
// import  rootReducer from './root-reducer'
import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './Usuario/UsuarioReducer';

const store = configureStore({
    reducer:{
        usuario: usuarioReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;