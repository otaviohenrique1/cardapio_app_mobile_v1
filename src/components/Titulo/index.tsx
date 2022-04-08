import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface TituloProps {
  texto: string;
}

export function Titulo(props: TituloProps) {
  return (
    <Text style={styles.titulo}>{props.texto}</Text>
  );
}

interface SubtituloProps extends TituloProps {}

export function Subtitulo(props: SubtituloProps) {
  return (
    <Text style={styles.subtitulo}>{props.texto}</Text>
  );
}

interface TituloContainerProps {
  children: ReactNode;
}

export function TituloContainer(props: TituloContainerProps) {
  return (
    <View style={styles.titulo_container}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  titulo_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});