import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../App/Authentication/Views/login";
import Cadastro from "../App/Authentication/Views/cadastro";
import TrocaSenha from "../App/Authentication/Views/trocaSenha";
import Home from "../App/Home/Views/Home";
import CadastroGrupo from "../App/Home/Views/CadastroGrupo";
import Grupo from "../App/Home/Views/Grupo";

const { Navigator,Screen } = createNativeStackNavigator();

type StackNavigation = {
    Cadastro : undefined,
    TrocaSenha : undefined,
    Login : undefined,
    Home : undefined,
    CadastroGrupo: undefined,
    Grupo: undefined
} 

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent(){

    const linking = {
        prefixes: ['exp://1bsr3bg-anonymous-8081.exp.direct/--/amchoco'],
        // config: {
        //     screens:{
        //         Home : {
        //             path:'home'
        //         },
        //         Grupo:{
        //             path:'grupo'
        //         },
        //     }
        // }
    }

    return(
        <NavigationContainer linking={linking}>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Login" component={Login}/>
                <Screen name="TrocaSenha" component={TrocaSenha}/>
                <Screen name="Cadastro" component={Cadastro}/>
                <Screen name="Home" component={Home}/>
                <Screen name="CadastroGrupo" component={CadastroGrupo}/>
                <Screen name="Grupo" component={Grupo}/>
            </Navigator>
        </NavigationContainer>
    )
}