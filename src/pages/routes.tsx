import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "./HomePage";
import { RefeicaoPage } from "./RefeicaoPage";
import { Login } from "./Login";
import { NovoUsuario } from "./NovoUsuario";
import React from "react";
import { HeaderApp } from "../components/Header/HeaderApp";

export type RootStackParamList = {
  Login: undefined;
  NovoUsuario: undefined;
  HomePage: undefined;
  RefeicaoPage: { id: string };
}

export function Routes() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          header: (props) => (
            <HeaderApp
              titulo="Cardapio"
              exibe_botao_voltar={false}
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
              on_press_botao_voltar={() => props.navigation.goBack()}
            />
          ),
        }}
      />
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: 'cadetblue',
  },
});
