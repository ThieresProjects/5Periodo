import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation, StackTypes } from "../../../Routes/routes";
import styles from '../../../Content/Styles/styles'
import {
  View,
  ImageBackground,
  ScrollView
} from "react-native";
import ListGroupComponent from "../Components/ListGroupComponent";
import HeaderComponent from "../Components/HeaderComponent";
import { RouteProp } from '@react-navigation/native';
import { getUsersById } from "../../../Util/Services/UsuarioService";
import { Usuario } from "../../../Util/Models/Usuario";
import { Grupo } from "../../../Util/Models/Grupo";
import { getManyGroups } from "../../../Util/Services/GrupoService";
import { getManyUsersGroup } from "../../../Util/Services/UsuarioGrupoService";
import { UsuarioGrupo } from "../../../Util/Models/UsuarioGrupo";



type HomeScreenRouteProp = RouteProp<StackNavigation, 'Home'>;
type Props = {
  route: HomeScreenRouteProp;
};

const HomeScreen: React.FC<Props> = ({ route }) => {
    const { usuarioId } = route.params;
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [ user, setUser ] = useState({} as Usuario);
    const [ userGroups, setUsersGroups ] = useState<UsuarioGrupo[]>();
    

    const navigation = useNavigation<StackTypes>();

    useEffect( () => {
      const response = async () => {
        setUser(await getUsersById(route.params.usuarioId)) 
        setUsersGroups(await getManyUsersGroup(route.params.usuarioId))
        // setGroups(await getManyGroups())
      }
      response();
    }, []); 

    const redirectPage = () => {
      navigation.navigate('CadastroGrupo',{usuarioId: usuarioId, grupoId : ""});
    }

    function defaultVoid(){

    }

    const image = require('../../../Content/Images/background/roxo-marrom.jpg');
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image} >
          <View style={styles.body}>

            <View style={{
              margin:'0%'
            }}>
              <HeaderComponent user={user} />
            </View>  

            <View style={{width:'100%',marginTop:80}}>
              <ScrollView>
                  <View style={{}}>
                    <ListGroupComponent ListTitle="Grupos" groups={userGroups ?? [] as UsuarioGrupo[]} share={false} />
                  </View>          
              </ScrollView>
            </View>

          </View>          
        </ImageBackground >
      </View>
  );
};

export default HomeScreen;
