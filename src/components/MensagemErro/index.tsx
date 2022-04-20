import { StyleSheet, Text } from "react-native";

interface MensagemErroProps {
  menssagem: string | undefined;
}

export function MensagemErro(props: MensagemErroProps) {
  const { menssagem } = props;
  const { mensagem_erro } = styles;

  return (
    <Text style={mensagem_erro}>{menssagem}</Text>
  );
}

const styles = StyleSheet.create({
  mensagem_erro: {
    fontSize: 20,
    color: 'red',
  },
});