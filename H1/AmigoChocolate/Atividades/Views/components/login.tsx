import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { TextInput, TouchableOpacity, View, Text, StyleSheet, ImageBackground } from "react-native";
import { StackTypes } from "../routes/routes";

function Login() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

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
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
                {/* <Text style={styles.container}>Login</Text> */}
                <TextInput  
                    style={styles.input} 
                    placeholder="Login"
                    onChangeText={setLogin}
                    value={login}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Passsword" 
                    onChangeText={setSenha}
                    secureTextEntry={true} 
                    value={senha}
                />

                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleTroca}>
                    <Text style={styles.button}>Esquecer a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCadastro}>
                    <Text style={styles.button}>Criar conta</Text>
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

export default Login;