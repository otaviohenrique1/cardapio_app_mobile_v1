import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface BotaoContainerProps {
  children: ReactNode;
}

export function BotaoContainer(props: BotaoContainerProps) {
  const { children } = props;
  const { botao_container } = styles;

  return (
    <View style={botao_container}>{children}</View>
  );
}

const styles = StyleSheet.create({
  botao_container: {
    flexDirection: 'column',
  },
});