import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import { Container } from '../../components/Container';
import api, { id_empresa_cliente } from '../../utils/api';
import { FormatadorDados } from '../../utils/FormatadorDados';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function HomePage({ navigation }: NavigationProps) {
  const [data, setData] = useState<ListaRefeicaoTypes[]>([]);

  useEffect(() => {
    api.get(`refeicao/cardapio/${id_empresa_cliente}`)
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

  const { itemLista, itemListaNome, itemListaTexto, itemListaPrecoContainer, itemListaPrecoLabel } = styles;

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={(item) => {
          const {id, nome, preco } = item.item;
          const preco_formatado = FormatadorDados.FormataValorMonetarioTexto(preco);

          return (
            <TouchableOpacity onPress={() => navigation.navigate('RefeicaoPage', { id })}>
              <View style={itemLista}>
                <View style={itemListaNome}>
                  <Text style={itemListaTexto}>{nome}</Text>
                </View>
                <View style={itemListaPrecoContainer}>
                  <Text style={[itemListaPrecoLabel, itemListaTexto]}>Preço (R$):</Text>
                  <Text style={itemListaTexto}>{preco_formatado}</Text>
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

