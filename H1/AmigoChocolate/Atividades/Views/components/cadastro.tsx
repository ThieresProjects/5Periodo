import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { TextInput, TouchableOpacity, View, Text, StyleSheet, ImageBackground } from "react-native";
import { StackTypes } from "../Routes/routes";
import styles from './styles'

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
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

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleTroca} style={styles.button}>
                <Text style={styles.buttonText}>Esquecer a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Já possui uma conta?</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Cadastro;