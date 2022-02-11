import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export function Header() {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>Cardapio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    marginTop: Constants.statusBarHeight,
    padding: 15,
    backgroundColor: 'cadetblue',
    marginBottom: 20
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
