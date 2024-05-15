import { PayloadAction, createSlice, createAsyncThunk, AsyncThunkAction } from "@reduxjs/toolkit";
import { Usuario } from '@prisma/client';

interface usuarioState {
    usuario: Usuario
}

const initialState : usuarioState = {
    usuario: {} as Usuario
}; 

const createUser = async (usuario : Usuario) => {
    const user = await prisma.usuario.create({
        data: usuario,
    });    
    return user;    
};

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers:{
        criar: (state, action : PayloadAction<Usuario>) => { 
            state.usuario = action.payload
        },
        criarUsuario: (state, action: PayloadAction<Usuario>) => {
            createUser(action.payload)
                .then( user => state.usuario = user)
                .catch( err => console.error(err));                
        }
    }
});

export const { criarUsuario, criar } = usuarioSlice.actions;

export default usuarioSlice.reducer;
