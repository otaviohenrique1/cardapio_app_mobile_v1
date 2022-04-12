import { Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "./HomePage";
import { RefeicaoPage } from "./RefeicaoPage";
import { Login } from "./Login";
import { NovoUsuario } from "./NovoUsuario";

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
          headerStyle: styles.containerHeader,
          headerTitle: (props) => <Text {...props} style={styles.textHeader}>Cardapio</Text>,
        }}
      />
      <Stack.Screen
        name="RefeicaoPage"
        component={RefeicaoPage}
        options={{
          headerStyle: styles.containerHeader,
          headerTitle: (props) => <Text {...props} style={styles.textHeader}>Cardapio</Text>,
          headerPressColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: 'cadetblue',
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
