import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "../../../Content/Styles/styles";

const GrupoComponent = () => {
    return(
        <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            marginHorizontal:'5%',
            marginTop: 50,
            marginBottom: 30,
            width:'90%',
            backgroundColor: '#711E00',
            borderRadius: 15,
            padding:20
        }}>
            <Text style={styles.subtitle}>Grupo</Text>
            <View style={{flexDirection: 'row'}}>
                {
                    true &&
                    
                    <TouchableOpacity>
                        <Text style={styles.buttonAdd}>Sortear</Text>
                    </TouchableOpacity>

                }
                <TouchableOpacity>
                    <Text style={styles.buttonCancel}>Sair</Text>
                </TouchableOpacity>
                
            </View>
        </View>   
    )
}

export default GrupoComponent;