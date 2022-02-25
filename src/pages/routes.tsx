import { Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "./HomePage";
import { RefeicaoPage } from "./RefeicaoPage";

export type RootStackParamList = {
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
