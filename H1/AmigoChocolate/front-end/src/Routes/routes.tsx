import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../App/Authentication/Views/LoginScreen";
import TrocaSenhaScreen from "../App/Authentication/Views/TrocaSenhaScreen";
import HomeScreen from "../App/Home/Views/HomeScreen";
import CadastroGrupoScreen from "../App/Home/Views/CadastroGrupoScreen";
import GrupoScreen from "../App/Home/Views/GrupoScreen";
import CadastroScreen from "../App/Authentication/Views/cadastroScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type StackNavigation = {
    Cadastro : undefined,
    TrocaSenha : undefined,
    Login : undefined,
    Home : { usuarioId: string },
    CadastroGrupo: { usuarioId: string,grupoId : string},
    Grupo: { usuarioId: string, grupoId : string}
} 
const Stack = createStackNavigator<StackNavigation>();
export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent (){

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
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="TrocaSenha" component={TrocaSenhaScreen}/>
                <Stack.Screen name="Cadastro" component={CadastroScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="CadastroGrupo" component={CadastroGrupoScreen}/>
                <Stack.Screen name="Grupo" component={GrupoScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}