import { PayloadAction, createSlice, createAsyncThunk, AsyncThunkAction } from "@reduxjs/toolkit"
import { Usuario } from "./Usuario";
import axios from "axios";

interface usuarioState {
    usuarios: Usuario[]
}

const initialState : usuarioState = {
    usuarios: {} as Usuario[]
}; 

const url = 'http://localhost:4200/usuario';

// const getMany = async () => {
//     const user = await axios.get<Usuario[]>(url);
//         // .then(function (response) {
//         //     user = response;
//         // })
//         // .catch(function (error) {
//         //     console.log(error);
//         // });
//     return user.request as Usuario;    
// }

// const create = async (usuario : Usuario) => {
//     // console.log(usuario);
//     const user = await axios.post(url, { data: usuario});
//     console.log(user);
//     return user.request as Usuario;    
// };

// const update = async (usuario : Usuario) => {
//     const user = await axios.put(url,{usuario});
//     return user.request as Usuario;    
// };

// // const delete = async (usuario : Usuario) => {
// //     const user = await axios.delete('localhost:4200/usuario');
// //     return user.request as Usuario;    
// // };

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers:{
        getUsers: (state, action: PayloadAction<Usuario[]>) => { 
            state.usuarios = action.payload;
        },
        createUser: (state, action: PayloadAction<Usuario>) => {
            state.usuarios = [ action.payload ];               
        }
    }
});

export const { createUser, getUsers } = usuarioSlice.actions;

export default usuarioSlice.reducer;
