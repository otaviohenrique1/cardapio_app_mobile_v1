import { FlatList } from "react-native";
import { RefeicoesItem } from "../RefeicoesItem";

interface RefeicoesListaProps {
  data: ListaRefeicaoTypes[];
}

export function RefeicoesLista(props: RefeicoesListaProps) {
  const { data } = props;

  return (
    <FlatList
      data={data}
      renderItem={(data) => {
        const { item } = data;

        return (
          <RefeicoesItem data={item} />
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
}
