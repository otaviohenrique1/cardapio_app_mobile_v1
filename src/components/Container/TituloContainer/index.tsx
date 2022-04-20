import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface TituloContainerProps {
  children: ReactNode;
}

export function TituloContainer(props: TituloContainerProps) {
  const { children } = props;
  const { titulo_container } = styles;

  return (
    <View style={titulo_container}>{children}</View>
  );
}

const styles = StyleSheet.create({
  titulo_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});