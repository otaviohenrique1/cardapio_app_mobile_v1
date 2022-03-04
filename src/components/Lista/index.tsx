import { FlatList } from "react-native";
import { ListaItem } from "../ListaItem";

interface ListaProps {
  data: ListaRefeicaoTypes[];
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
          />
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
}
