import React, { useRef, useState } from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
// import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AlertDialog, Box, Button, /*HamburgerIcon,*/ Menu, Pressable, WarningOutlineIcon, Text as TextNativeBase, Center } from 'native-base';
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

interface HeaderAppProps {
  titulo: string;
  exibe_botao_voltar: boolean;
  navigation: StackNavigationProp<ParamListBase, string>;
}

export function HeaderApp(props: HeaderAppProps) {
  const { containerHeader, botaoVoltar, tituloHeaderContainer, tituloHeader } = styles;
  const { titulo, exibe_botao_voltar, navigation } = props;
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  return (
    <View style={containerHeader}>
      <View style={tituloHeaderContainer}>
        {(exibe_botao_voltar) ? (
          <Pressable
            onPress={() => navigation.goBack()}
            style={botaoVoltar}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </Pressable>
        ) : null}
        <Text style={tituloHeader}>{titulo}</Text>
      </View>
      <BotaoAvatarMenu
        id="id"
        nome="Nome"
        on_press_botao_perfil={() => {
          /* Vai para a pagina do perfil */
        }}
        on_press_botao_sair={() => setIsOpen(!isOpen)}
      />
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={5}
          >
            <WarningOutlineIcon size="4xl"/>
            <TextNativeBase fontSize="2xl" marginTop={2}>Aviso</TextNativeBase>
          </AlertDialog.Header>
          <AlertDialog.Body
            justifyItems="center"
            alignSelf="center"
          >
            <TextNativeBase fontSize="xl">Deseja se deslogar do app?</TextNativeBase>
          </AlertDialog.Body>
          <AlertDialog.Footer
            justifyContent="center"
            alignItems="center"
          >
            <Button.Group
              space={2}
            >
              <Button
                colorScheme="blue"
                onPress={onClose}
                ref={cancelRef}
                size="lg"
              >
                <TextNativeBase
                  fontSize="xl"
                  fontWeight="bold"
                  color="white"
                >Não</TextNativeBase>
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => {
                  /* Logica de limpar os dados do login que estao na memoria do celular */
                  navigation.replace('Login');
                  setIsOpen(false);
                }}
                size="lg"
              >
                <TextNativeBase
                  fontSize="xl"
                  fontWeight="bold"
                  color="white"
                >Sim</TextNativeBase>
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </View>
  );
}

interface BotaoAvatarMenuProps {
  id: string;
  nome: string;
  on_press_botao_perfil: ((event: GestureResponderEvent) => void);
  on_press_botao_sair: ((event: GestureResponderEvent) => void);
}

function BotaoAvatarMenu(props: BotaoAvatarMenuProps) {
  const { id, nome, on_press_botao_perfil, on_press_botao_sair } = props;
  const nome_formatado = nome.slice(0, 10);

  return (
    <Menu w="190" trigger={triggerProps => {
      return (
        <Pressable accessibilityLabel="Menu usuario" {...triggerProps}>
          {/* <HamburgerIcon /> */}
          <FontAwesome5 name="user-circle" size={30} color="white" />
        </Pressable>
      );
    }}>
      <Menu.Item>{`ID -> ${id}`}</Menu.Item>
      <Menu.Item>{`Nome -> ${nome_formatado}...`}</Menu.Item>
      <Menu.Item onPress={on_press_botao_perfil}>Perfil</Menu.Item>
      <Menu.Item onPress={on_press_botao_sair}>Sair</Menu.Item>
    </Menu>
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
});
