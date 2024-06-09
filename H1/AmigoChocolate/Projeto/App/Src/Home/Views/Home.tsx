import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../Routes/routes";
import styles from '../../../Content/Styles/styles'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import ListGroupComponent from "../Components/ListGroupComponent";
import HeaderComponent from "../Components/HeaderComponent";


const Home = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation<StackTypes>();

    const redirectPage = () => {
      navigation.navigate('CadastroGrupo');
    }

    function defaultVoid(){

    }

    const image = require('../../../Content/Images/background/marrom.jpg');
    // const image = {uri: 'https://onedrive.live.com/embed?resid=DEC3DAFF4EF1EA63%21132944&authkey=%21AM-yQL-BGfgX3Dg&width=3508&height=2480'};

  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image} >
          <View style={styles.body}>

            <View style={{
              margin:'0%'
            }}>
              <HeaderComponent />
            </View>  

            <View style={{width:'100%',marginTop:80}}>
              <ScrollView>
                  <View style={{}}>
                    <ListGroupComponent ListTitle="Grupos" share={false} />
                  </View>          
              </ScrollView>
            </View>

          </View>          
        </ImageBackground >
      </View>
  );
};

export default Home;
