import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface ContainerProps {
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.page}>{props.children}</View>
      <StatusBar style="auto" />
    </View>
  );
}

interface BotaoContainerProps extends ContainerProps {}

export function BotaoContainer(props: BotaoContainerProps) {
  return (
    <View style={styles.botao_container}>{props.children}</View>
  );
}

interface CampoContainerProps extends ContainerProps {}

export function CampoContainer(props: CampoContainerProps) {
  return (
    <View style={styles.campo_container}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c3c329',
    flexDirection: 'column',
  },
  page: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  botao_container: {
    flexDirection: 'column',
  },
  campo_container: {
    marginBottom: 25,
  },
});