import { View, Text, Image, ImageSourcePropType } from "react-native";
import styles from "../../../Content/Styles/styles";
import { useEffect, useState } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";

const HeaderComponent = () => {
    const { usuario } =  useSelector( (state:RootState) => state.usuario )

    const image = require('../../../Content/Images/perfil/default-user.jpeg');
    const [imageUser,setImageUser] = useState();
    useEffect( () => {
        // if(usuario.Imagem == )
            setImageUser(image)
    },[imageUser])

    
    
    return (
        <View style={{position: 'absolute',top:-50}}>
            <View style={styles.header}>
                <View >
                    <Text style={ [styles.subtitle, {margin:15}]}>{usuario.Nome}</Text>
                </View>
                <View style={{margin:15}}>
                    <Image source={imageUser} style={styles.HeaderImg} ></Image>
                </View>
            </View>
        </View>
    )
}

export default HeaderComponent;