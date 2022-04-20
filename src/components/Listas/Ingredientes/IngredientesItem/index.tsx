import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface IngredientesItemProps {
  data: IngredientesTypes;
}
export function IngredientesItem(props: IngredientesItemProps) {
  const { nome, quantidade } = props.data;
  const { ingredientesItem, ingredientesItemTexto } = styles;

  return (
    <View style={ingredientesItem}>
      <Entypo name="triangle-right" size={30} color="black" />
      <Text style={ingredientesItemTexto}>{nome}</Text>
      <Text style={ingredientesItemTexto}>{String(quantidade)}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
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