import { StyleSheet, Text } from "react-native";

interface MensagemErroProps {
  menssagem: string | undefined;
}

export function MensagemErro(props: MensagemErroProps) {
  return (
    <Text style={styles.mensagem_erro}>{props.menssagem}</Text>
  );
}

const styles = StyleSheet.create({
  mensagem_erro: {
    fontSize: 20,
    color: 'red',
  },
});