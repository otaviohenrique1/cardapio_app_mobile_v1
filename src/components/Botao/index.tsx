import React from "react";
import { ColorValue, GestureResponderEvent, StyleSheet, Text, TouchableHighlight } from "react-native";

interface BotaoProps {
  on_press: ((event: GestureResponderEvent) => void);
  botao_cor: ColorValue;
  botao_texto_cor: ColorValue;
  botao_texto: string;
}

export function Botao(props: BotaoProps) {
  return (
    <TouchableHighlight
      onPress={props.on_press}
      style={[styles.botao, { backgroundColor: props.botao_cor }]}
    >
      <Text style={[styles.botao_texto, { color: props.botao_texto_cor }]}>{props.botao_texto}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  botao: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 1,
    padding: 10,
  },
  botao_texto: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
