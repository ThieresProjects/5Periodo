import * as fileSystem from 'expo-file-system'
import axios from 'axios'
import { useState } from "react"
import {ImagePickerAsset} from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../Routes/routes";
import styles from '../../../Content/Styles/styles'
import {
    TextInput,
    TouchableOpacity,
    View, 
    Text, 
    ImageBackground, 
    ImageSourcePropType
} from "react-native";
// import ImagemPerfil from "../Components/imagemPerfil";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { setUser } from "../../../Store/Usuario/UsuarioReducer";
import React from "react";
import { createUser  } from "../../../Util/Services/UsuarioService";
import { ImagemPerfil } from "../../../Util/Models/ImagemPerfil";
import ImagemDePerfil from "../Components/imagemDePerfil";
import moment from 'moment';

const CadastroScreen = () => {
    const { usuarios } =  useSelector( (state:RootState) => state.usuario )
    const dispach = useDispatch();

    const [foto, setFoto] = useState<ImagePickerAsset>(require('../../../Content/Images/perfil/default-user.jpeg'));
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const navigation = useNavigation<StackTypes>();

    const saveImage = async () => {
        if(foto.uri !== undefined){
            // var data = new FormData();
            // var fetchUri = await fetch(foto.uri);
            // var blob = await fetchUri.blob();
            // console.log(JSON.stringify(blob));
            // data.append('file', blob);
            // uploadFile(data);
            //const fileRoute = 'C:/_Repository/ThieresProjects/5Periodo/H1/AmigoChocolate/Projeto/App/Content/Images/upload/';
            // const fileUri =  fileSystem.documentDirectory + `${date}.jpg`;
            // try {
            //     const res = await fileSystem.downloadAsync(foto.uri, fileUri);
            // }
            // catch(err){
            //     console.log("FS Err: ", err)
            // }
        }
    }

    const Register = async () => {
        // const file = saveImage();
        var user = {
            Nome: nome,
            Email: email,
            Senha: senha,
            Imagem: "",
            Ativo: true,
        };
        console.log(user);
        await createUser( user );
        navigation.navigate('Login');
    }

    const handleLogin = () => {
        
    }

const image = require('../../../Content/Images/background/roxo-marrom.jpg');

    return (
        <View  style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
            {/* <Text style={styles.container}>Cadastro</Text> */}

            <ImagemDePerfil source={foto} setUpload={setFoto} />

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
                secureTextEntry={true} 
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

            <TouchableOpacity onPress={handleLogin}>
                <Text style={[styles.buttonText,styles.underline]}>Já possui uma conta?</Text>
            </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default CadastroScreen;
