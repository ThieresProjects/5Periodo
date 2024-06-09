import { useEffect, useState } from "react"
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
import { useDispatch, useSelector } from "react-redux";
import { criar, criarUsuario } from "../../../Store/Usuario/UsuarioReducer";
import { RootState } from "../../../Store/store";
import ImagemPerfil from "../../Authentication/Components/imagemPerfil";


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
            {/* <Text style={styles.container}>Cadastro</Text> */}

            <ImagemPerfil />

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