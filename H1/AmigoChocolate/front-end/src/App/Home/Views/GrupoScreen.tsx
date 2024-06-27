import { ImageBackground, ScrollView, View, Text, Share } from "react-native";
import styles from "../../../Content/Styles/styles";
import ListGroupComponent from "../Components/ListGroupComponent";
import HeaderComponent from "../Components/HeaderComponent";
import GrupoComponent from "../Components/GrupoComponent";
import React, { useEffect, useState } from "react";
import { Usuario } from "../../../Util/Models/Usuario";
import { Grupo } from "../../../Util/Models/Grupo";
import { getManyGroups } from "../../../Util/Services/GrupoService";
import { getUsersById } from "../../../Util/Services/UsuarioService";
import { StackNavigation } from "../../../Routes/routes";
import { RouteProp } from "@react-navigation/native";
import { UsuarioGrupo } from "../../../Util/Models/UsuarioGrupo";
import { getManyUsersGroup } from "../../../Util/Services/UsuarioGrupoService";

type HomeScreenRouteProp = RouteProp<StackNavigation, 'Grupo'>;
type Props = {
  route: HomeScreenRouteProp;
};

const GrupoScreen : React.FC<Props> = ({ route }) =>  {
    const { usuarioId, grupoId } = route.params;
    const image = require('../../../Content/Images/background/roxo-marrom.jpg');
    const [ user, setUser ] = useState({} as Usuario);
    const [ userGroups, setUsersGroups ] = useState<UsuarioGrupo[]>();

    useEffect( () => {
      const response = async () => {
        setUser(await getUsersById(route.params.usuarioId)) 
        setUsersGroups(await getManyUsersGroup(route.params.usuarioId))
      }
      response();
    }, []);

    return (
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} >
                    <View style={styles.body}>
                        <HeaderComponent user={user}/>

                        <GrupoComponent />
                        
                        <ScrollView>
                            <ListGroupComponent 
                                groups={userGroups ?? [] as UsuarioGrupo[]}
                                ListTitle="Participantes" 
                                share={true}  
                                count={true}
                                minCount={1}
                                maxCount={10}
                                deleteble={true}
                            />
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
    );
}

export default GrupoScreen;