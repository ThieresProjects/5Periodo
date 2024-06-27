
const url = 'http://192.168.15.196:4200/usuario/';

fetch(url)
.then( response => response.json())
.then( x => console.log("success: ", x))
.catch(err => console.error("error: ", err));