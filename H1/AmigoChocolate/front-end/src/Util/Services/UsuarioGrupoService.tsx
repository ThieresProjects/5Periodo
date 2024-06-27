import axios from "axios";
import { UsuarioGrupo } from "../Models/UsuarioGrupo";


const url = 'http://192.168.15.196:4200/usuarioGrupo';


export const getManyUsersGroup = async (id:string) : Promise<UsuarioGrupo[]> => {
    try{
        // const response = await fetch(url);
        const response = await axios.get(url + '/' + id);
        if (response) {
            console.log(response.data);
            return await response.data as UsuarioGrupo[];
        }
        return await [] as UsuarioGrupo[];
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const createUsersGroup = async (userGroup : UsuarioGrupo) : Promise<void> =>  {
    try{
        console.log('post');
        await axios.post(url, userGroup);
    }
    catch(err){
        console.error(err);
        throw err;
    }
}