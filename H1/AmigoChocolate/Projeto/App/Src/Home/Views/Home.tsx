import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../Routes/routes";
import styles from '../../../Content/Styles/styles'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";


const Home = () => {
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
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} >
      {/* <Text style={styles.title}>Amigo Chocolate</Text> */}


      </ImageBackground >
    </View>
  );
};

export default Home;
