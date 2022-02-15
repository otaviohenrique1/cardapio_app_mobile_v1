import { StyleSheet, Text, View } from "react-native";
import { FormataValorMonetarioTexto } from "../../utils/utils";

interface ItemProps {
  nome: string;
  ativo: boolean;
  preco: number;
}

export function Item(props: ItemProps) {
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
        <Text style={styles.itemListaTexto}>{(props.ativo) ? "Ativo" : "Inativo"}</Text>
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
