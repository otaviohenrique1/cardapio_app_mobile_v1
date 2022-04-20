import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export function Header() {
  const { containerHeader, textHeader} = styles;

  return (
    <View style={containerHeader}>
      <Text style={textHeader}>Cardapio</Text>
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
