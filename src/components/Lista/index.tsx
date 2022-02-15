import { FlatList } from "react-native";
import { Item } from "../Item";

interface DataTypes {
  id: number;
  nome: string;
  preco: number;
  ativo: boolean;
}

interface ListaProps {
  data: DataTypes[];
}

export function Lista(props: ListaProps) {
  return (
    <FlatList
      data={props.data}
      renderItem={(item) => {
        return (
          <Item
            nome={item.item.nome}
            preco={item.item.preco}
            ativo={item.item.ativo}
          />
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
}
