import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface CampoContainerProps {
  children: ReactNode;
}

export function CampoContainer(props: CampoContainerProps) {
  const { children } = props;
  const { campo_container } = styles;

  return (
    <View style={campo_container}>{children}</View>
  );
}

const styles = StyleSheet.create({
  campo_container: {
    marginBottom: 25,
  },
});