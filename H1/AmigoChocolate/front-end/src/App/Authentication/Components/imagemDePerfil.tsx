import { Alert, TouchableOpacity, Text, Image, ImageSourcePropType } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import styles from "../../../Content/Styles/styles";
import { Dispatch, SetStateAction, useState } from "react";
import React from "react";

interface ImagemPerfilProps {
    source : ImagePicker.ImagePickerAsset,
    setUpload : Dispatch<SetStateAction<ImagePicker.ImagePickerAsset>>
}

const ImagemDePerfil = (props:ImagemPerfilProps) => {
    const image = require('../../../Content/Images/logo/marrom.png');
    // const [imageUser,setImageUser] = useState<ImageSourcePropType>(image);

    const handerImageUser = () =>{
        Alert.alert('Imagem','Selecione a imagem:',[
            {
                text : 'galeria',
                onPress :  () => pickImageFromGalery(),
                style: 'default'
            },
            {
                text : 'camera',
                onPress :  () => pickImageFromCamera(),
                style: 'default'
            },
            // {
            //     cancelable : true,
            //     onDismiss :  () => console.log('tratar depois...')
            // },
        ])
    }

    const pickImageFromGalery = async () => {
        var result = await ImagePicker.launchImageLibraryAsync();
        if(!result.canceled){
            props.setUpload(result.assets[0]);
            return;
        }
    }
    const pickImageFromCamera = async () => {
        var result = await ImagePicker.launchCameraAsync();

        if(!result.canceled){
            props.setUpload(result.assets[0]);
            return;
        }
    }

    return (
        <TouchableOpacity
            onPress={handerImageUser}
        >
            <Image source={props.source} style={styles.ContentImg} ></Image>
        </TouchableOpacity>
    )
}

export default ImagemDePerfil;