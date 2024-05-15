import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Usuario } from "../../../Models/Usuario"

interface usuarioState {
    usuario: Usuario 
}

const initialState : usuarioState = {
    usuario: {} as Usuario
}; 

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers:{
        addUser : (state, action: PayloadAction<Usuario>) => {
            state.usuario = action.payload
        }
    }
});

export default usuarioSlice.reducer;