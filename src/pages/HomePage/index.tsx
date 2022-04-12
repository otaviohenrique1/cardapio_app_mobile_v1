import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container } from '../../components/Container';
import api from '../../utils/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import { FormataValorMonetarioTexto } from '../../utils/utils';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function HomePage({ navigation }: NavigationProps) {
  const [data, setData] = useState<ListaRefeicaoTypes[]>([]);

  useEffect(() => {
    api.get('/refeicao/cardapio')
      .then((data) => {
        let lista = [...data.data];
        let listaFiltrada = lista.filter((item) => item.ativo !== false);
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
                <View style={styles.itemListaPrecoContainer}>
                  <Text style={[styles.itemListaPrecoLabel, styles.itemListaTexto]}>Preço (R$):</Text>
                  <Text style={styles.itemListaTexto}>{FormataValorMonetarioTexto(item.item.preco)}</Text>
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
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#9dd7fb',
    borderColor: '#6cc3f9',
    borderWidth: 1,
    borderRadius: 15,
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowRadius: 5,
    shadowOpacity: 10,
    shadowColor: 'lightgray'
  },
  itemListaTexto: {
    fontSize: 25,
  },
  itemListaNome: {
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  itemListaPrecoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemListaPrecoLabel: {
    marginRight: 5,
    fontWeight: 'bold',
  }
});

