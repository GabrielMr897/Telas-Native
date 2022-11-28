import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import AlterarSenha from '../screens/AlterarSenha';
import Cadastro from "../screens/Cadastro-1";
import ConfirmacaoCadastro from '../screens/Cadastro-2';
import ConfirmacaoSenhaAlterada from '../screens/ConfirmacaoSenhaAlterada';
import EsqueciMinhaSenha from "../screens/EsqueciMinhaSenha";
import Favoritos from '../screens/Favoritos';
import Login from "../screens/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Screen
                name="Login"
                component={Login}
            />

            <Screen
                name="EsqueciMinhaSenha"
                component={EsqueciMinhaSenha}
            />

            <Screen
                name="AlterarSenha"
                component={AlterarSenha}
            />
              <Screen
                name="ConfirmacaoSenhaAlterada"
                component={ConfirmacaoSenhaAlterada}
            />

            <Screen
                name="Cadastro"
                component={Cadastro}
            />

            <Screen
                name="ConfirmacaoCadastro"
                component={ConfirmacaoCadastro}
            />
            
            <Screen
                name="Favoritos"
                component={Favoritos}
            />

                   
              </Navigator>
    )

}