import { FlatList } from "react-native";
import { ListaItem } from "../ListaItem";

interface DataTypes {
  id: string;
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
          <ListaItem
            id={item.item.id}
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
