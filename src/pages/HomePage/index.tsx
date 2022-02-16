import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Lista } from '../../components/Lista';
import api from '../../utils/api';

interface DataTypes {
  id: number;
  nome: string;
  preco: number;
  ativo: boolean;
}

export function HomePage() {
  const [data, setData] = useState<DataTypes[]>([]);
  
  useEffect(() => {
    api.get('/refeicao')
      .then((data) => {
        setData(data.data);
      })
      .catch((erro) => {
        Alert.alert('Erro', `${erro}`);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Lista data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
