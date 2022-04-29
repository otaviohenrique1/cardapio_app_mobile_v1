import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../pages/routes";

export interface BotaoVoltarProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function BotaoVoltar(props: BotaoVoltarProps) {
  const { navigation } = props;

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.botaoVoltarHeader}
    >
      <AntDesign name="arrowleft" size={40} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoVoltarHeader: {
    paddingStart: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
