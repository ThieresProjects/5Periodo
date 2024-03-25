import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
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
    return (
        <View>
            <Text style={styles.container}>Cadastro</Text>

            <TextInput 
                style={styles.container} 
                placeholder="Nome"
                onChangeText={setNome}
                value={nome}
            />

            <TextInput 
                style={styles.container} 
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput 
                style={styles.container} 
                placeholder="Senha" 
                onChangeText={setSenha}
                value={senha}
            />
            <TextInput 
                style={styles.container} 
                placeholder="Confirmar Senha" 
                onChangeText={setConfSenha}
                secureTextEntry={true} 
                value={confSenha}
            />

            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.container}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleTroca}>
                <Text style={styles.container}>Esquecer a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.container}>Já possui uma conta?</Text>
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

export default Cadastro;