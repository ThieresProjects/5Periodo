import { View, Text, Image, ImageSourcePropType } from "react-native";
import styles from "../../../Content/Styles/styles";
import { useState } from "react";

const HeaderComponent = () => {
    const image = require('../../../Content/Images/logo/marrom.png');
    const [imageUser,setImageUser] = useState<ImageSourcePropType>(image);
    return (
        <View style={{position: 'absolute',top:-50}}>
            <View style={styles.header}>
                <View >
                    <Text style={ [styles.subtitle, {margin:15}]}>burguer</Text>
                </View>
                <View style={{margin:15}}>
                    <Image source={imageUser} style={styles.HeaderImg} ></Image>
                </View>
            </View>
        </View>
    )
}

export default HeaderComponent;