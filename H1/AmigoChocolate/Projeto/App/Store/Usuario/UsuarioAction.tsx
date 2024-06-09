import axios from "axios";
import { Usuario } from "./Usuario";
import { useDispatch, useSelector } from "react-redux";
import createUser from "../../Store/Usuario/UsuarioReducer";
import { RootState } from "../store";

const url = 'http://localhost:4200/usuario';
const { usuario } =  useSelector( (state:RootState) => state.usuario )
const dispach = useDispatch();

export default async function create(user : Usuario) {
    var response = axios.post<Usuario>(url, {data : usuario } )
        .then( x => console.log(x));
    dispach(createUser(usuario,user));
}