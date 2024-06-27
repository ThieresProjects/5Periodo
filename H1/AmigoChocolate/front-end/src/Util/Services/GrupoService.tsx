import axios from "axios";
import { Grupo } from "../Models/Grupo";

const url = 'http://192.168.15.196:4200/grupo';
// const url = 'http://192.168.15.196:4200/grupo';


export const getGroupById = async (id:string) : Promise<Grupo> => {
    try{
        const response = await axios.get(url+ '/' + id);
        if (response) {
            console.log(response.data);
            return await response.data as Grupo;
        }
        return await {} as Grupo;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}
export const getManyGroups = async () : Promise<Grupo[]> => {
    const response = await axios.get(url);
    return await response.data as Grupo[];
}

export const createGroups = (group : Grupo) => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(group),
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then( response => response.json())
    .then( x => console.log("success: ", x))
    .catch(err => console.error("error: ", err));
}