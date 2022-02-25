import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/Container';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import { AntDesign } from '@expo/vector-icons';
import api from '../../utils/api';
import { FormataValorMonetarioTexto } from '../../utils/utils';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'RefeicaoPage'>;

interface DataTypes {
  nome: string;
  preco: number;
  ingredientes: string[]
}

const valoresIniciais: DataTypes = {
  nome: '',
  preco: 0,
  ingredientes: []
};

export function RefeicaoPage({ route, navigation }: NavigationProps) {
  const [data, setData] = useState<DataTypes>(valoresIniciais);
  const { id } = route.params;
  
  useEffect(() => {
    api.get(`refeicao/${id}`)
      .then((item) => {
        let nome = item.data.nome;
        let preco = item.data.preco;
        let ingredientes = String(item.data.ingredientes).split(';');

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
        <Text style={styles.nomeItem}>{data.nome}</Text>
        <View style={styles.precoItemContainer}>
          <Text style={[styles.precoItem, styles.precoItemTitulo]}>Preço (R$):</Text>
          <Text style={styles.precoItem}>{FormataValorMonetarioTexto(data.preco)}</Text>
        </View>
        <View style={styles.ingredientesItemContainer}>
          <Text style={styles.ingredientesItemTitulo}>Ingredientes</Text>
          <View style={styles.ingredientesItemLista}>
            {data.ingredientes.map((item, index) => {
              return (
                <Text style={styles.ingredientesItem} key={index}>{`- ${item}`}</Text>
              );
            })}
          </View>
        </View>
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
  nomeItem: {
    fontSize: 40,
    textAlign: 'center',
  },
  precoItemContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  precoItemTitulo: {
    fontWeight: 'bold',
  },
  precoItem: {
    fontSize: 30,
  },
  ingredientesItemContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  ingredientesItemTitulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  ingredientesItemLista: {
    flexDirection: 'column',
  },
  ingredientesItem: {
    fontSize: 30,
  },
});
