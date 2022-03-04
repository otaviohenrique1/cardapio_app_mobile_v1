import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import { AntDesign } from '@expo/vector-icons';
import api from '../../utils/api';
import { FormataValorMonetarioTexto } from '../../utils/utils';
import { Entypo } from '@expo/vector-icons';
import { valoresIniciaisRefeicao } from '../../utils/constantes';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'RefeicaoPage'>;

export function RefeicaoPage({ route, navigation }: NavigationProps) {
  const [data, setData] = useState<RefeicaoTypes>(valoresIniciaisRefeicao);
  const { id } = route.params;

  useEffect(() => {
    api.get(`refeicao/${id}`)
      .then((item) => {
        let nome = item.data.nome;
        let preco = item.data.preco;
        let ingredientes = JSON.parse(String(item.data.ingredientes));

        setData({ nome, preco, ingredientes });
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

  return (
    <Container>
      <View style={styles.refeicaoPagina}>
        <Text style={styles.nomeItemTexto}>{data.nome}</Text>
        <View style={styles.precoItemContainer}>
          <Text style={[styles.precoItemValor, styles.precoItemTitulo]}>Preço (R$):</Text>
          <Text style={styles.precoItemValor}>{FormataValorMonetarioTexto(data.preco)}</Text>
        </View>
        <View style={styles.ingredientesContainer}>
          <Text style={styles.ingredientesTitulo}>Ingredientes</Text>
          <View style={styles.ingredientesItemLista}>
            {data.ingredientes.map((item, index) => {
              return (
                <IngredientesItem key={index} nome={item.nome} />
              );
            })}
          </View>
        </View>
      </View>
    </Container>
  );
}

interface IngredientesItemProps {
  nome: string;
}

function IngredientesItem(props: IngredientesItemProps) {
  return (
    <View style={styles.ingredientesItem}>
      <Entypo name="triangle-right" size={30} color="black" />
      <Text style={styles.ingredientesItemTexto}>{`${props.nome}`}</Text>
    </View>
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
  ingredientesContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  ingredientesTitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientesItemLista: {
    flexDirection: 'column',
  },
  ingredientesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ingredientesItemTexto: {
    fontSize: 25,
  },
});
