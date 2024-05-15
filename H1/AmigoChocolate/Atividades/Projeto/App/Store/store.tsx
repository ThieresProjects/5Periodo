import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './Usuario/UsuarioReducer';

const store = configureStore({
    reducer:{
        usuario: usuarioReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;