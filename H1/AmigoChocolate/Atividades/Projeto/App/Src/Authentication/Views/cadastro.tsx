import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../Routes/routes";
import styles from '../../../Content/Styles/styles'
import {
    TextInput,
    TouchableOpacity,
    View, 
    Text, 
    ImageBackground 
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { criar, criarUsuario } from "../../../Store/Usuario/UsuarioReducer";
import { Usuario } from "@prisma/client";
import { RootState } from "../../../Store/store";

function Cadastro() {
    const { usuario } =  useSelector( (state:RootState) => state.usuario )
    const dispach = useDispatch();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const navigation = useNavigation<StackTypes>();

    useEffect( () => console.log(usuario), [usuario] );

    const Register = () => {
        var user = {
            Nome: nome,
            Email: email,
            Senha: senha,
            Imagem: "",
            Ativo: true,
            CriadoEm: new Date() as Date,
            AtualizadoEm: new Date() as Date,
        } as Usuario;

        // dispach( criar( user ) );
        dispach( criarUsuario( user ) );
        
        navigation.navigate('Login');
    }

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    const image = {uri: 'https://onedrive.live.com/embed?resid=DEC3DAFF4EF1EA63%21132944&authkey=%21AM-yQL-BGfgX3Dg&width=3508&height=2480'};

    return (
        <View  style={styles.container}>
            {/* <Text style={styles.container}>Cadastro</Text> */}
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
            <TextInput 
                style={styles.input} 
                placeholder="Nome"
                onChangeText={setNome}
                value={nome}
            />

            <TextInput 
                style={styles.input} 
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Senha" 
                onChangeText={setSenha}
                value={senha}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Confirmar Senha" 
                onChangeText={setConfSenha}
                secureTextEntry={true} 
                value={confSenha}
            />

            <TouchableOpacity onPress={Register} style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar-se</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={handleTroca} style={styles.button}>
                <Text style={styles.buttonText}>Esquecer a senha?</Text>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Já possui uma conta?</Text>
            </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Cadastro;