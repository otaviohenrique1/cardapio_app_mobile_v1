import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface IngredientesItemProps {
  data: IngredientesTypes;
}
export function IngredientesItem(props: IngredientesItemProps) {
  const { nome, quantidade } = props.data;
  const { ingredientesItem, ingredientesItemMarcador, ingredientesItemTexto } = styles;
  const plural = (quantidade > 1) ? '(s)' : '';
  const ingrediente_valor = `${String(quantidade)} ${nome}${plural}`;

  return (
    <View style={ingredientesItem}>
      <Entypo
        name="triangle-right"
        size={30}
        color="black"
        style={ingredientesItemMarcador}
      />
      <Text style={ingredientesItemTexto}>
        {ingrediente_valor}
      </Text>
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
  ingredientesItemMarcador: {
    marginRight: 5
  },
  ingredientesItemTexto: {
    fontSize: 25,
  },
});
