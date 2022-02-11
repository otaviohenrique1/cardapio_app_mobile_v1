import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { lista_teste_refeicoes } from '../../utils/listas';
import { FormataValorMonetarioTexto } from '../../utils/utils';

interface DataTypes {
  id: number;
  nome: string;
  preco: number;
  ativo: string;
}

export function HomePage() {
  const [data, setData] = useState<DataTypes[]>([]);
  
  useEffect(() => {
    setData(lista_teste_refeicoes);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(item) => {
          return (
            <View style={styles.itemLista}>
              <View style={styles.itemListaNome}>
                <Text style={styles.itemListaTexto}>{item.item.nome}</Text>
              </View>
              <View style={styles.itemListaPrecoAtivo}>
                <View style={styles.itemListaPrecoContainer}>
                  <Text style={[styles.itemListaPrecoLabel, styles.itemListaTexto]}>Preço (R$):</Text>
                  <Text style={styles.itemListaTexto}>{FormataValorMonetarioTexto(item.item.preco)}</Text>
                </View>
                <Text style={styles.itemListaTexto}>{item.item.ativo}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
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
    fontSize: 18,
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
