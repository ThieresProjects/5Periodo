import axios from "axios";
import { Usuario } from "../Models/Usuario";

const url = 'http://192.168.15.196:4200/usuario';

export const getManyUsers = async () : Promise<Usuario[]> => {
    const response = await fetch(url);
    return await response.json() as Usuario[];
}

export const createUser = (user : Usuario) : void =>  {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then( response => response.json())
    .then( x => console.log("success: ", x))
    .catch(err => console.error("error: ", err));
}
export const uploadFile = (data : FormData) : void =>  {
    fetch(url + '/upload', {
        // mode: 'no-cors',
        method: "POST",
        body: data,
        // body: JSON.stringify(data),
        // headers: {
        //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        //     'Content-Type': 'multipart/form-data'
        // }
    })
    .then( response => response.json())
    .then( x => console.log("success: ", x))
    .catch(err => console.error("error: ", err));
}