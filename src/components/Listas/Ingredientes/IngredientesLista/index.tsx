import { StyleSheet, Text, View } from 'react-native';
import { IngredientesItem } from '../IngredientesItem';

interface IngredientesListaProps {
  data: IngredientesTypes[];
}

export function IngredientesLista(props: IngredientesListaProps) {
  const { data } = props;
  const { ingredientesContainer, ingredientesTitulo, ingredientesItemLista } = styles;

  return (
    <View style={ingredientesContainer}>
      <Text style={ingredientesTitulo}>Ingredientes</Text>
      <View style={ingredientesItemLista}>
        {data.map((item, index) => {
          return (
            <IngredientesItem key={index} data={item} />
          );
        })}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  ingredientesContainer: {
    flexDirection: 'column',
    paddingVertical: 30,
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
});