import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { TextInput, TouchableOpacity, View, Text, StyleSheet, ImageBackground } from "react-native";
import { StackTypes } from "../routes/routes";

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
        <View>
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

            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleTroca}>
                <Text style={styles.button}>Esquecer a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.button}>Já possui uma conta?</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
          
    },
    input:{
        borderBlockColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#FFF', 
        margin: 5,
        padding: 2,
        flex: 1
    },
    button:{
        borderBlockColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#FFF', 
        margin: 5,
        padding: 2,
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: 1000 
      },
  });

export default Cadastro;