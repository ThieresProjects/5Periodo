import { useState } from "react"
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
import React from "react";

function TrocaSenha() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const navigation = useNavigation<StackTypes>();

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    const handleTroca = () => {
        navigation.navigate('TrocaSenha');
    }

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    }

    const image = require('../../../Content/Images/background/roxo-marrom.jpg');
    // const image = {uri: 'https://onedrive.live.com/embed?resid=DEC3DAFF4EF1EA63%21132944&authkey=%21AM-yQL-BGfgX3Dg&width=3508&height=2480'};

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
            {/* <Text style={styles.container}>Trocar Senha</Text> */}

            <TextInput 
                style={styles.input} 
                placeholder="Email"
                onChangeText={setLogin}
                value={login}
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
                placeholder="Confirmar senha" 
                onChangeText={setConfSenha}
                secureTextEntry={true} 
                value={confSenha}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Confirmar Senha" 
                onChangeText={setSenha}
                secureTextEntry={true} 
                value={senha}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleTroca} style={styles.button}>
                <Text style={styles.buttonText}>Esquecer a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCadastro} style={styles.button}>
                <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}


export default TrocaSenha;