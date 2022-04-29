import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Alert, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Container } from '../../components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import { AntDesign } from '@expo/vector-icons';
import { ApiBuscaDadosUmaRefeicao } from '../../utils/api';
import { valoresIniciaisRefeicao } from '../../utils/constantes';
import { IngredientesLista } from '../../components/Listas/Ingredientes/IngredientesLista';
import { FormatadorDados } from '../../utils/FormatadorDados';
import { BotaoVoltar } from '../../components/Botoes/BotaoVoltar';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'RefeicaoPage'>;

export function RefeicaoPage({ route, navigation }: NavigationProps) {
  const [data, setData] = useState<RefeicaoTypes>(valoresIniciaisRefeicao);
  const { id } = route.params;

  useEffect(() => {
    // api.get(`refeicao/${id}`)
    ApiBuscaDadosUmaRefeicao(id)
      .then((item) => {
        const { nome, preco, ingredientes, descricao } = item.data;
        const data = { nome, preco, ingredientes, descricao };
        setData(data);
      })
      .catch((error) => {
        Alert.alert(`${error}`);
        console.error(error);
      });
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BotaoVoltar navigation={navigation} />,
    });
  }, [navigation]);

  const { nome, preco, ingredientes, descricao } = data;
  const { refeicaoPagina, nomeItemTexto,
    precoItemContainer, precoItemValor, precoItemTitulo,
    descricaoItemContainer, descricaoItemTitulo, descricaoItemValor } = styles;
  const preco_formatado = FormatadorDados.FormataValorMonetarioTexto(preco);

  const lista_dados: ItemFichaDadosProps[] = [
    {
      style_container: precoItemContainer, style_titulo: [precoItemValor, precoItemTitulo],
      style_valor: precoItemValor, titulo: "Preço (R$):", valor: preco_formatado,
    },
    {
      style_container: descricaoItemContainer, style_titulo: [descricaoItemValor, descricaoItemTitulo],
      style_valor: descricaoItemValor, titulo: "Descrição:", valor: preco_formatado,
    },
  ];

  return (
    <Container>
      <View style={refeicaoPagina}>
        <Text style={nomeItemTexto}>{nome}</Text>
        {lista_dados.map((item, index) => {
          const { style_container, style_titulo, style_valor, titulo, valor } = item;
          return (
            <ItemFichaDados
              key={index} style_container={style_container} style_titulo={style_titulo}
              style_valor={style_valor} titulo={titulo} valor={valor}
            />
          );
        })}
        <IngredientesLista data={ingredientes} />
      </View>
    </Container>
  );
}

interface ItemFichaDadosProps {
  style_container: StyleProp<ViewStyle>;
  style_titulo: StyleProp<TextStyle>;
  style_valor: StyleProp<TextStyle>;
  titulo: string;
  valor: string;
}

function ItemFichaDados(props: ItemFichaDadosProps) {
  const { style_container, style_titulo, style_valor, titulo, valor } = props;
  return (
    <View style={style_container}>
      <Text style={style_titulo}>{titulo}</Text>
      <Text style={style_valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  refeicaoPagina: {
    flexDirection: 'column',
  },
  nomeItemTexto: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 30,
    paddingHorizontal: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  precoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  precoItemTitulo: {
    fontWeight: 'bold',
  },
  precoItemValor: {
    fontSize: 30,
  },
  descricaoItemContainer: {
    flexDirection: 'column',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  descricaoItemTitulo: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricaoItemValor: {
    fontSize: 30,
  },
});
