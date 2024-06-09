import { View, Text, FlatList, TouchableOpacity, Share } from "react-native";
import styles from "../../../Content/Styles/styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../Routes/routes";
import { useState } from "react";

interface ListProps {
    ListTitle : string,
    share : boolean,
    count?: boolean,
    minCount?: number,
    maxCount?: number,
    deleteble?: boolean
}

const ListGroupComponent = (props:ListProps) => {
    const [data,setData] = useState([
        {key: 1,name: 'Devin'},
        {key: 2,name: 'Dan'},
        {key: 3,name: 'Dominic'},
        {key: 4,name: 'Jackson'},
        {key: 5,name: 'James'},
        {key: 6,name: 'Joel'},
        {key: 7,name: 'John'},
        {key: 8,name: 'Jillian'},
        {key: 9,name: 'Jimmy'},
    ]);
    const navigation = useNavigation<StackTypes>();
    const redirectPage = () => {
        navigation.navigate('Grupo');
    }
    const redirectPageRegister = () => {
        navigation.navigate('CadastroGrupo');
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

    const deleteListItem = (key:number) => {
        let arr = data.filter(item => {
            return item.key !== key
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
                renderItem={ ({item}:any) => {
                    return (

                        <TouchableOpacity key={item.key} onPress={redirectPage}>
                            <View  style={styles.ListItem}>
                                <Text style={styles.text20}>{item.name}</Text>
                                {
                                    props.deleteble &&
                                    <TouchableOpacity onPress={() => deleteListItem(item.key)}>
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