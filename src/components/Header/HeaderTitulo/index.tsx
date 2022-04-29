import { Text, StyleSheet } from "react-native";

interface HeaderTituloProps {
  titulo: string
}

export function HeaderTitulo(props: HeaderTituloProps) {
  const { titulo } = props;
  return (
    <Text style={styles.textHeader}>{titulo}</Text>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});