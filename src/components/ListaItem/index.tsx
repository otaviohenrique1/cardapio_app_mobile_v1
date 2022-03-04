import { StyleSheet, Text, View } from "react-native";
import { FormataValorMonetarioTexto } from "../../utils/utils";

interface ListaItemProps extends ListaRefeicaoTypes {}

export function ListaItem(props: ListaItemProps) {
  return (
    <View style={styles.itemLista}>
      <View style={styles.itemListaNome}>
        <Text style={styles.itemListaTexto}>{props.nome}</Text>
      </View>
      <View style={styles.itemListaPrecoAtivo}>
        <View style={styles.itemListaPrecoContainer}>
          <Text style={[styles.itemListaPrecoLabel, styles.itemListaTexto]}>Preço (R$):</Text>
          <Text style={styles.itemListaTexto}>{FormataValorMonetarioTexto(props.preco)}</Text>
        </View>
      </View>
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
