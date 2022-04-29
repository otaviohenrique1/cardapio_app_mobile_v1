import React from "react";
import { Alert, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

interface HeaderAppProps {
  titulo: string;
  exibe_botao_voltar: boolean;
  on_press_botao_voltar?: ((event: GestureResponderEvent) => void)
}

export function HeaderApp(props: HeaderAppProps) {
  const { containerHeader, botaoVoltar, tituloHeaderContainer, tituloHeader, botaoAvatarHeader } = styles;
  const { titulo, exibe_botao_voltar, on_press_botao_voltar } = props;

  return (
    <View style={containerHeader}>
      <View style={tituloHeaderContainer}>
        {(exibe_botao_voltar) ? (
          <TouchableOpacity
            onPress={on_press_botao_voltar}
            style={botaoVoltar}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
        ) : null}
        <Text style={tituloHeader}>{titulo}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Avatar');
          alert('Avatar');
        }}
        style={botaoAvatarHeader}
      >
        <FontAwesome5 name="user-circle" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    // marginTop: Constants.statusBarHeight,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'cadetblue',
    // marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoVoltar: {
    // paddingStart: 15,
    marginEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tituloHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  botaoAvatarHeader: {
    // paddingStart: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
