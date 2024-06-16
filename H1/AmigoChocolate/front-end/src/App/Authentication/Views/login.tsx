import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../Routes/routes";
import styles from '../../../Content/Styles/styles'
import { RootState } from "../../../Store/store";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { getManyUsers } from "../../../Util/Services/UsuarioService";
import { setUser } from "../../../Store/Usuario/UsuarioReducer";
import { useDispatch } from "react-redux";


const Login = () => {
    // const { usuario } =  useSelector( (state:RootState) => state.usuario )
    const dispach = useDispatch();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation<StackTypes>();

    const loginEffect =async () => {
      const users = await getManyUsers();
      if(
        users.some(x => x.Email == login.toString() && x.Senha == senha.toString()
      )){
        dispach( setUser( users.filter(x => x.Email == login.toString() && x.Senha == senha.toString())[0] ) );
        navigation.navigate('Home');
      }
      else
        alert('Email ou senha incorretos!');
    }

    const handleTroca = () => {
        navigation.navigate('TrocaSenha');
    }

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    }

    const Register = async () => {
      const users = await getManyUsers();
    }

    const image = require('../../../Content/Images/background/marrom.jpg');
    // const image = {uri: 'https://onedrive.live.com/embed?resid=DEC3DAFF4EF1EA63%21132944&authkey=%21AM-yQL-BGfgX3Dg&width=3508&height=2480'};

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} >
      <Text style={styles.title}>Bem Vindo!</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#ccc"
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#ccc"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TouchableOpacity style={styles.button} onPress={loginEffect}>
        <Text style={styles.buttonText}>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={handleTroca}>
        <Text style={[styles.underline,styles.buttonText]}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      </ImageBackground >
    </View>
  );
};

export default Login;
