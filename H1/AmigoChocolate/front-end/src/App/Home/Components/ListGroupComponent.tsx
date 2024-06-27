import { View, Text, FlatList, TouchableOpacity, Share } from "react-native";
import styles from "../../../Content/Styles/styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../Routes/routes";
import { useState } from "react";
import React from "react";
import { Grupo } from "../../../Util/Models/Grupo";
import { UsuarioGrupo } from "../../../Util/Models/UsuarioGrupo";

interface ListProps {
    ListTitle : string,
    share : boolean,
    groups : UsuarioGrupo[];
    count?: boolean,
    minCount?: number,
    maxCount?: number,
    deleteble?: boolean
}

const ListGroupComponent = (props:ListProps) => {
    const [data,setData] = useState<UsuarioGrupo[]>(props.groups);
    const navigation = useNavigation<StackTypes>();
    const redirectPage = () => {
        navigation.navigate('Grupo', {usuarioId:"",grupoId:""});
    }
    const redirectPageRegister = () => {
        navigation.navigate('CadastroGrupo', {usuarioId:"",grupoId:""});
    }

    const url = "exp://1bsr3bg-anonymous-8081.exp.direct/--/amchoco/";
    const onShared = async () => {
        try{
            const result = await Share.share({
                message: ('Bug Ninza' + '\n' + url)
            });

            if(result.action === Share.sharedAction){
                if(result.activityType) {
                    console.log('' + result.activityType);
                } else {
                    console.log('shared');
                }
            }
            else if(result.action === Share.dismissedAction) {
                console.log('dimissed');
            }
        }
        catch (err:unknown) {
            console.log(err);
        }
    }

    const deleteListItem = (key:string) => {
        let arr = data.filter(item => {
            return item.id && item.id !== key
        });
        setData(arr);
    }
    return (

        <View>
            <View style={{
                flexDirection:'row',
                justifyContent: 'space-between',
                width:'90%',
                marginLeft:'5%'
            }}>
                <View>
                    <Text style={styles.subtitle}>
                        {props.ListTitle}
                        {props.count &&                         
                            '(' + props.minCount + '/' + props.maxCount + ')'                                       
                        }
                    </Text>
                </View>
                <View>
                    {props.share ?
                        <TouchableOpacity style={styles.buttonAdd} onPress={onShared}>
                            <Text>✈️</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.buttonAdd} onPress={redirectPageRegister}>
                            <Text>➕</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={ ({item}) => {
                    return (

                        <TouchableOpacity key={item.id} onPress={redirectPage}>
                            <View  style={styles.ListItem}>
                                <Text style={styles.text20}>{item.Grupo}</Text>
                                {
                                    props.deleteble &&
                                    <TouchableOpacity onPress={() => deleteListItem(item.id ?? "")}>
                                        <Text style={styles.text20}>❌</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ListGroupComponent;