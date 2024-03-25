import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
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
    return (
        <View>
            <Text style={styles.container}>Login</Text>

            <TextInput 
                style={styles.container} 
                placeholder="Login"
                onChangeText={setLogin}
                value={login}
            />
            <TextInput 
                style={styles.container} 
                placeholder="Passsword" 
                onChangeText={setSenha}
                secureTextEntry={true} 
                value={senha}
            />

            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.container}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleTroca}>
                <Text style={styles.container}>Esquecer a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCadastro}>
                <Text style={styles.container}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Login;