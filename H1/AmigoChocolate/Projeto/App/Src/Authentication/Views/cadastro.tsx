import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../Routes/routes";
import styles from '../../../Content/Styles/styles'
import { connect } from "react-redux";
import {
    TextInput,
    TouchableOpacity,
    View, 
    Text, 
    ImageBackground, 
    ImageSourcePropType
} from "react-native";
import ImagemPerfil from "../Components/imagemPerfil";
import create from "../../../Store/Usuario/UsuarioAction";
// import { createUser } from "../../../Store/Usuario/UsuarioReducer";
// import  from "../../../Store/store";

const Cadastro = () => {
    // const { usuario } =  useSelector( (state:RootState) => state.usuario )
    // const dispach = useDispatch();

    const [foto, setFoto] = useState<ImageSourcePropType>(require('../../../Content/Images/logo/marrom.png'));
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const navigation = useNavigation<StackTypes>();

    // useEffect( () => console.log(usuario), [usuario] );

    const Register = () => {
        var user = {
            Nome: nome,
            Email: email,
            Senha: senha,
            Imagem: '',//foto as string,
            Ativo: true,
        };
        createUser( user );
        // console.log(user);        
        // navigation.navigate('Login');
    }

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    const image = require('../../../Content/Images/background/marrom.jpg');
    // const image = {uri: 'https://onedrive.live.com/embed?resid=DEC3DAFF4EF1EA63%21132944&authkey=%21AM-yQL-BGfgX3Dg&width=3508&height=2480'};

    return (
        <View  style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
            {/* <Text style={styles.container}>Cadastro</Text> */}

            <ImagemPerfil source={foto} setUpload={setFoto} />

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
                secureTextEntry={true} 
                value={senha}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Confirmar Senha" 
                onChangeText={setConfSenha}
                secureTextEntry={true} 
                value={confSenha}
            />

            <TouchableOpacity onPress={Register} style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar-se</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin}>
                <Text style={[styles.buttonText,styles.underline]}>Já possui uma conta?</Text>
            </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Cadastro;