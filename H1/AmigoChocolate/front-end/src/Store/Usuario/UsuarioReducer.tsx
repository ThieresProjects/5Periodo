import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Usuario } from "../../Util/Models/Usuario";

interface usuarioState {
    usuario: Usuario,
    usuarios: Usuario[]
}

const initialState : usuarioState = {
    usuario: {} as Usuario,
    usuarios: {} as Usuario[]
}; 

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers:{
        setUser: (state, action: PayloadAction<Usuario>) => { 
            state.usuario = action.payload;
        }
    }
});

export const { setUser } = usuarioSlice.actions;

export default usuarioSlice.reducer;
