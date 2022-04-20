import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface ContainerProps {
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  const { children } = props;
  const { container, page } = styles;

  return (
    <View style={container}>
      <View style={page}>{children}</View>
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c3c329',
    flexDirection: 'column',
  },
  page: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});