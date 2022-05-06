import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "./HomePage";
import { RefeicaoPage } from "./RefeicaoPage";
import { Login } from "./Login";
import { NovoUsuario } from "./NovoUsuario";
import React from "react";
import { HeaderApp } from "../components/Header/HeaderApp";
import { FormularioTeste } from "./FormularioTeste";

export type RootStackParamList = {
  Login: undefined;
  NovoUsuario: undefined;
  HomePage: undefined;
  RefeicaoPage: { id: string };
  FormularioTeste: undefined;
}

export function StackRoutes() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="FormularioTeste">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NovoUsuario"
        component={NovoUsuario}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          header: (props) => (
            <HeaderApp
              titulo="Cardapio"
              exibe_botao_voltar={false}
              navigation={props.navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="RefeicaoPage"
        component={RefeicaoPage}
        options={{
          header: (props) => (
            <HeaderApp
              titulo="Cardapio"
              exibe_botao_voltar={true}
              navigation={props.navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="FormularioTeste"
        component={FormularioTeste}
        options={{
          header: (props) => (
            <HeaderApp
              titulo="Cardapio"
              exibe_botao_voltar={false}
              navigation={props.navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: 'cadetblue',
  },
});
