import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Container } from '../../components/Container';
import { Lista } from '../../components/Lista';
import api from '../../utils/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';

interface DataTypes {
  id: string;
  nome: string;
  preco: number;
  ativo: boolean;
}

type NavigationProps = { 
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function HomePage2({ navigation }: NavigationProps) {
  const [data, setData] = useState<DataTypes[]>([]);
  
  useEffect(() => {
    api.get('/refeicao')
      .then((data) => {
        let lista = [...data.data];
        let listaFiltrada = lista.filter((item) => {
          return item.ativo !== false ;
        });
        let validaLista = (listaFiltrada) ? listaFiltrada : [];
        setData(validaLista);
      })
      .catch((erro) => {
        Alert.alert('Erro', `${erro}`);
      });
  }, []);

  return (
    <Container>
      <Lista data={data} />
    </Container>
  );
}

