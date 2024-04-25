import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { StackTypes } from "../routes/routes";

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
    return (
        <View>
            <Text style={styles.container}>Trocar Senha</Text>

            <TextInput 
                style={styles.container} 
                placeholder="Email"
                onChangeText={setLogin}
                value={login}
            />
            <TextInput 
                style={styles.container} 
                placeholder="Senha" 
                onChangeText={setSenha}
                secureTextEntry={true} 
                value={senha}
            />
            <TextInput 
                style={styles.container} 
                placeholder="Confirmar senha" 
                onChangeText={setConfSenha}
                secureTextEntry={true} 
                value={confSenha}
            />
            <TextInput 
                style={styles.container} 
                placeholder="Confirmar Senha" 
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

export default TrocaSenha;