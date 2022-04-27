import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import { AntDesign } from '@expo/vector-icons';
import api, { ApiBuscaDadosUmaRefeicao } from '../../utils/api';
import { FormataValorMonetarioTexto } from '../../utils/utils';
import { valoresIniciaisRefeicao } from '../../utils/constantes';
import { IngredientesLista } from '../../components/Listas/Ingredientes/IngredientesLista';
import { FormatadorDados } from '../../utils/FormatadorDados';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'RefeicaoPage'>;

export function RefeicaoPage({ route, navigation }: NavigationProps) {
  const [data, setData] = useState<RefeicaoTypes>(valoresIniciaisRefeicao);
  const { id } = route.params;

  useEffect(() => {
    // api.get(`refeicao/${id}`)
    ApiBuscaDadosUmaRefeicao(id)
      .then((item) => {
        const { nome, preco, ingredientes, descricao } = item.data;
        let lista_ingredientes = JSON.parse(String(ingredientes));

        setData({ nome, preco, ingredientes: lista_ingredientes, descricao });
      })
      .catch((error) => {
        Alert.alert(`${error}`);
      });
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.botaoVoltarHeader}
        >
          <AntDesign name="arrowleft" size={40} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const { nome, preco, ingredientes, descricao } = data;
  const { refeicaoPagina, nomeItemTexto,
    precoItemContainer, precoItemValor, precoItemTitulo,
    descricaoItemContainer, descricaoItemValor } = styles;
  const preco_formatado = FormatadorDados.FormataValorMonetarioTexto(preco);

  return (
    <Container>
      <View style={refeicaoPagina}>
        <Text style={nomeItemTexto}>{nome}</Text>
        <View style={precoItemContainer}>
          <Text style={[precoItemValor, precoItemTitulo]}>Preço (R$):</Text>
          <Text style={precoItemValor}>{preco_formatado}</Text>
        </View>
        <View style={descricaoItemContainer}>
          <Text style={descricaoItemValor}>{descricao}</Text>
        </View>
        <IngredientesLista
          data={ingredientes}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  botaoVoltarHeader: {
    paddingStart: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  refeicaoPagina: {
    flexDirection: 'column',
  },
  nomeItemTexto: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
  },
  precoItemContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#000000',
    borderTopWidth: 1,
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
    marginVertical: 30,
    borderTopColor: '#000000',
    borderTopWidth: 1,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  descricaoItemValor: {
    fontSize: 30,
  },
});
