import { StyleSheet, Text, View } from "react-native";
import { FormatadorDados } from "../../../../utils/FormatadorDados";

interface RefeicoesItemProps {
  data: ListaRefeicaoTypes;
}

export function RefeicoesItem(props: RefeicoesItemProps) {
  const { nome, preco } = props.data;
  const { itemLista, itemListaNome, itemListaTexto, itemListaPrecoAtivo,
    itemListaPrecoContainer, itemListaPrecoLabel } = styles;
  const preco_formatado = FormatadorDados.FormataValorMonetarioTexto(preco);

  return (
    <View style={itemLista}>
      <View style={itemListaNome}>
        <Text style={itemListaTexto}>{nome}</Text>
      </View>
      <View style={itemListaPrecoAtivo}>
        <View style={itemListaPrecoContainer}>
          <Text
            style={[itemListaPrecoLabel, itemListaTexto]}
          >Preço (R$):</Text>
          <Text style={itemListaTexto}>{preco_formatado}</Text>
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
