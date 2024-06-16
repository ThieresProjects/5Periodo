import { ImageBackground, ScrollView, View, Text, Share } from "react-native";
import styles from "../../../Content/Styles/styles";
import ListGroupComponent from "../Components/ListGroupComponent";
import HeaderComponent from "../Components/HeaderComponent";
import GrupoComponent from "../Components/GrupoComponent";
import React from "react";

const Grupo = () => {

    const image = require('../../../Content/Images/background/marrom.jpg');

    return (
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} >
                    <View style={styles.body}>
                        <HeaderComponent />

                        <GrupoComponent />
                        
                        <ScrollView>
                            <ListGroupComponent 
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

export default Grupo;