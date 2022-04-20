import { StyleSheet, Text } from "react-native";

interface TituloProps {
  texto: string;
}

export function Titulo(props: TituloProps) {
  const { texto } = props;
  const { titulo } = styles;

  return (
    <Text style={titulo}>{texto}</Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});