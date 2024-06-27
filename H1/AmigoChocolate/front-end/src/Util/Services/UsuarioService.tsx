import axios from "axios";
import { Usuario } from "../Models/Usuario";

// const url = 'http://localhost:4200/usuario';


const url = 'http://192.168.15.196:4200/usuario';


export const getUsersById = async (id:string) : Promise<Usuario> => {
    try{
        const response = await axios.get(url+ '/' + id);
        if (response) {
            console.log(response.data);
            return await response.data as Usuario;
        }
        return await {} as Usuario;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}
export const getManyUsers = async () : Promise<Usuario[]> => {
    try{
        // const response = await fetch(url);
        const response = await axios.get(url);
        if (response) {
            console.log(response.data);
            return await response.data as Usuario[];
        }
        return await {} as Usuario[];
        // console.log(response.data);
        // return await response.data as Usuario[];
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export const createUser = async (user : Usuario) : Promise<void> =>  {
    try{
        console.log('post');
        await axios.post(url, user);
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

// export const uploadFile = (data : FormData) : void =>  {
//     fetch(url + '/upload', {
//         // mode: 'no-cors',
//         method: "POST",
//         body: data,
//         // body: JSON.stringify(data),
//         // headers: {
//         //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
//         //     'Content-Type': 'multipart/form-data'
//         // }
//     })
//     .then( response => response.json())
//     .then( x => console.log("success: ", x))
//     .catch(err => console.error("error: ", err));
// }