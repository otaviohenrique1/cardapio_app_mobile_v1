import React from "react";
import { ColorValue, GestureResponderEvent, StyleSheet, Text, TouchableHighlight } from "react-native";

interface BotaoProps {
  on_press: ((event: GestureResponderEvent) => void);
  botao_cor: ColorValue;
  botao_texto_cor: ColorValue;
  botao_texto: string;
}

export function Botao(props: BotaoProps) {
  const { on_press, botao_cor, botao_texto_cor, botao_texto } = props;
  const { botao, botao_texto_font } = styles;

  return (
    <TouchableHighlight
      onPress={on_press}
      style={[botao, { backgroundColor: botao_cor }]}
    >
      <Text
        style={[botao_texto_font, { color: botao_texto_cor }]}
      >{botao_texto}</Text>
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
  botao_texto_font: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
