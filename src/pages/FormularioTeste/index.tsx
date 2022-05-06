import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { estado, nome } from '../../utils/ValidacaoSchemas';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../pages/routes';
import { Divider, FormControl, Heading, Icon, Input, Select } from 'native-base';
import { TituloContainer } from '../../components/Container/TituloContainer';
import { Botao, BotaoProps } from '../../components/Botoes/Botao';
import { MensagemErro } from '../../components/MensagemErro';
import { BotaoContainer } from '../../components/Container/BotaoContainer';
import * as Yup from "yup";
import { lista_estados } from '../../utils/listas';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

interface FormularioTypes {
  nome: string;
  estado: string;
}

const validacaoSchemaFormulario = Yup.object({
  nome, estado
});

const valoresIniciaisFormulario: FormularioTypes = {
  nome: '',
  estado: '',
};

export function FormularioTeste({ navigation }: NavigationProps) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<ClienteTypes>({
    defaultValues: valoresIniciaisFormulario,
    resolver: yupResolver(validacaoSchemaFormulario)
  });

  async function onSubmit(values: ClienteTypes) {
    const { nome, estado } = values;

    let data = {
      nome, estado
    };

    console.log(data);

  };

  const lista_dados_botoes: BotaoProps[] = [
    { on_press: handleSubmit((onSubmit)), botao_texto_cor: 'white', botao_cor: 'blue', botao_texto: 'Salvar' },
    { on_press: () => reset(), botao_texto_cor: 'white', botao_cor: 'red', botao_texto: 'Limpar' },
    { on_press: () => navigation.goBack(), botao_texto_cor: 'white', botao_cor: 'green', botao_texto: 'Voltar' }
  ];

  return (
    <View style={styles.formulario_container}>
      <TituloContainer>
        <Heading size="2xl">Formulario Teste</Heading>
      </TituloContainer>
      <FormControl
        isRequired
        isInvalid={'nome' in errors}
        paddingY={2}
        paddingX={4}
      >
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="Nome"
              onChangeText={(val) => onChange(val)}
              value={value}
              variant="underlined"
              size="2xl"
            />
          )}
          name="nome"
          rules={{ required: 'Campo vazio', minLength: 3 }}
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          <MensagemErro menssagem={errors.nome?.message} />
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={'estado' in errors}
        paddingY={2}
        paddingX={4}
      >
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              placeholder="Estado"
              selectedValue={value}
              onValueChange={(itemValue: string) => { onChange(itemValue); }}
              variant="underlined"
              size="2xl"
            >
              <Select.Item label="Estado" value="" />
              {lista_estados.map((item, index) => <Select.Item label={item.texto} value={item.valor} key={index} />)}
            </Select>
          )}
          name="estado"
          rules={{ required: 'Selecione um item' }}
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          <MensagemErro menssagem={errors.estado?.message} />
        </FormControl.ErrorMessage>
      </FormControl>
      <Divider my="8" />
      <BotaoContainer>
        {lista_dados_botoes.map((item, index) => {
          const { on_press, botao_texto_cor, botao_cor, botao_texto } = item;
          return (
            <Botao
              key={index}
              on_press={on_press}
              botao_texto_cor={botao_texto_cor}
              botao_cor={botao_cor}
              botao_texto={botao_texto}
            />
          );
        })}
      </BotaoContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  formulario_container: {
    marginBottom: 30,
  },
});
