import { Grupo } from "../Models/Grupo";

const url = 'http://192.168.15.196:4200/grupo';

export const getManyGroups = async () : Promise<Grupo[]> => {
    const response = await fetch(url);
    return await response.json() as Grupo[];
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