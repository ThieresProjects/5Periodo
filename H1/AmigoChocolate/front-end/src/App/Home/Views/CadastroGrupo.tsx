import { useState } from "react"
import styles from '../../../Content/Styles/styles'
import {
    TextInput,
    TouchableOpacity,
    View, 
    Text, 
    ImageBackground 
} from "react-native";
import React from "react";


const CadastroGrupo = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const Register = () => {

    }

    const image = require('../../../Content/Images/background/marrom.jpg');

    return (
        <View  style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >

            <TextInput 
                style={styles.input} 
                placeholder="Nome"
                onChangeText={setNome}
                value={nome}
            />

            <TextInput 
                style={styles.input} 
                placeholder="Descricao"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Quantidade" 
                onChangeText={setSenha}
                value={senha}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Valor Maximo" 
                onChangeText={setConfSenha}
                secureTextEntry={true} 
                value={confSenha}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Data Revelação" 
                onChangeText={setConfSenha}
                secureTextEntry={true} 
                value={confSenha}
            />

            <TouchableOpacity onPress={Register} style={styles.button}>
                <Text style={styles.buttonText}>Criar grupo</Text>
            </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default CadastroGrupo;