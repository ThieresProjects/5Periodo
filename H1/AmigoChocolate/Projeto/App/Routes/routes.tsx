import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Src/Authentication/Views/login";
import Cadastro from "../Src/Authentication/Views/cadastro";
import TrocaSenha from "../Src/Authentication/Views/trocaSenha";
import Home from "../Src/Home/Views/Home";

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Cadastro : undefined,
    TrocaSenha : undefined,
    Login : undefined,
    Home : undefined
} 

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="TrocaSenha" component={TrocaSenha}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}