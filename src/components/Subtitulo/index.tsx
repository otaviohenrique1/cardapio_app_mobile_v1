import { Text, StyleSheet } from "react-native";

interface SubtituloProps {
  texto: string;
}

export function Subtitulo(props: SubtituloProps) {
  const { texto } = props;
  const { subtitulo } = styles;

  return (
    <Text style={subtitulo}>{texto}</Text>
  );
}

const styles = StyleSheet.create({
  subtitulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});