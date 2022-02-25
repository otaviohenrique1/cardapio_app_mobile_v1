import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container } from '../../components/Container';
import api from '../../utils/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import { FormataValorMonetarioTexto } from '../../utils/utils';

interface DataTypes {
  id: string;
  nome: string;
  preco: number;
}

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function HomePage({ navigation }: NavigationProps) {
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    api.get('/refeicao')
      .then((data) => {
        let lista = [...data.data];
        let listaFiltrada = lista.filter((item) => {
          return item.ativo !== false;
        });
        let validaLista = (listaFiltrada) ? listaFiltrada : [];
        setData(validaLista);
      })
      .catch((erro) => {
        Alert.alert('Erro', `${erro}`);
      });
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={(item) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('RefeicaoPage', { id: item.item.id })}>
              <View style={styles.itemLista}>
                <View style={styles.itemListaNome}>
                  <Text style={styles.itemListaTexto}>{item.item.nome}</Text>
                </View>
                <View style={styles.itemListaPrecoAtivo}>
                  <View style={styles.itemListaPrecoContainer}>
                    <Text style={[styles.itemListaPrecoLabel, styles.itemListaTexto]}>Preço (R$):</Text>
                    <Text style={styles.itemListaTexto}>{FormataValorMonetarioTexto(item.item.preco)}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  itemLista: {
    flexDirection: 'column',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'lightskyblue',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },
  itemListaTexto: {
    fontSize: 30,
  },
  itemListaNome: {
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  itemListaPrecoAtivo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemListaPrecoContainer: {
    flexDirection: 'row',
  },
  itemListaPrecoLabel: {
    marginRight: 5,
    fontWeight: 'bold',
  }
});

