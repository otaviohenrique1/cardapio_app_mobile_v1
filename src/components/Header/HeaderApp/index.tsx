import React, { useState } from "react";
import { Alert, FlatList, GestureResponderEvent, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

interface HeaderAppProps {
  titulo: string;
  exibe_botao_voltar: boolean;
  on_press_botao_voltar?: ((event: GestureResponderEvent) => void);
}

export function HeaderApp(props: HeaderAppProps) {
  const { containerHeader, botaoVoltar, tituloHeaderContainer, tituloHeader } = styles;
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
      <BotaoAvatar
        id="id"
        nome="Nome"
        on_press_botao_perfil={() => { }}
        on_press_botao_sair={() => { }}
      />
    </View>
  );
}

interface ListaDadosTypes {
  titulo: string;
  on_press_botao: ((event: GestureResponderEvent) => void);
}

interface BotaoAvatarProps {
  id: string;
  nome: string;
  on_press_botao_perfil: ((event: GestureResponderEvent) => void);
  on_press_botao_sair: ((event: GestureResponderEvent) => void);
}

function BotaoAvatar(props: BotaoAvatarProps) {
  const { botaoAvatarHeader, dropdownContainer, dropdownBotao, dropdownBotaoTexto,
    dropdownBotaoFechar, dropdownBotaoFecharContainer } = styles;
  const { id, nome, on_press_botao_perfil, on_press_botao_sair } = props;
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const lista_dados: ListaDadosTypes[] = [
    { titulo: nome, on_press_botao: () => { } },
    { titulo: "Perfil", on_press_botao: on_press_botao_perfil },
    { titulo: "Sair", on_press_botao: on_press_botao_sair },
  ];

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={botaoAvatarHeader}
      >
        <FontAwesome5 name="user-circle" size={30} color="white" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={dropdownBotaoFecharContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={dropdownBotaoFechar}>
              <Ionicons name="md-close" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <FlatList
            style={dropdownContainer}
            data={lista_dados}
            renderItem={(item) => {
              const { titulo, on_press_botao } = item.item;
              return (
                <TouchableOpacity onPress={on_press_botao} style={dropdownBotao}>
                  <Text style={dropdownBotaoTexto}>{titulo}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    // marginTop: Constants.statusBarHeight,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'cadetblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoVoltar: {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    flexDirection: 'column',
  },
  dropdownBotaoFecharContainer: {
    justifyContent: 'flex-end',
  },
  dropdownBotaoFechar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownBotao: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownBotaoTexto: {
    textAlign: 'center'
  },
});
