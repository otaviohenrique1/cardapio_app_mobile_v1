import React from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CampoInput, CampoInputProps } from '../Campos/CampoInput';
import { TituloContainer } from '../Container/TituloContainer';
import { Titulo } from '../Titulo';
import { MensagemErro } from '../MensagemErro';
import { CampoSelect } from '../Campos/CampoSelect';
import { BotaoContainer } from '../Container/BotaoContainer';
import { Botao, BotaoProps } from '../Botoes/Botao';
import { valoresIniciaisCliente } from '../../utils/constantes';
import { validacaoSchemaCliente } from '../../utils/ValidacaoSchemas';
import { lista_estados } from '../../utils/listas';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../pages/routes';
import { FormControl, Input } from 'native-base';

interface FormularioUsuarioProps {
  titulo: string;
  onSubmit(values: ClienteTypes): Promise<void>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function FormularioUsuario(props: FormularioUsuarioProps) {
  const { titulo, onSubmit, navigation } = props;

  const { control, handleSubmit, formState: { errors }, reset } = useForm<ClienteTypes>({
    defaultValues: valoresIniciaisCliente,
    resolver: yupResolver(validacaoSchemaCliente)
  });

  const lista_dados_campos: CampoInputProps[] = [
    {
      control: control, name: "nome", erro: errors.nome, placeholder: "Nome",
      keyboardType: "default", secureTextEntry: false
    },
    {
      control: control, name: "telefone", erro: errors.telefone, placeholder: "Telefone",
      keyboardType: "phone-pad", secureTextEntry: false
    },
    {
      control: control, name: "email", erro: errors.email, placeholder: "Email",
      keyboardType: "email-address", secureTextEntry: false
    },
    {
      control: control, name: "senha", erro: errors.senha, placeholder: "Senha",
      keyboardType: "default", secureTextEntry: true
    },
    {
      control: control, name: "confirmacao_senha", erro: errors.confirmacao_senha, placeholder: "Repita a senha",
      keyboardType: "default", secureTextEntry: true
    },
    {
      control: control, name: "rua", erro: errors.rua, placeholder: "Rua",
      keyboardType: "default", secureTextEntry: false
    },
    {
      control: control, name: "bairro", erro: errors.bairro, placeholder: "Bairro",
      keyboardType: "default", secureTextEntry: false
    },
    {
      control: control, name: "numero", erro: errors.numero, placeholder: "Numero",
      keyboardType: "numeric", secureTextEntry: false
    },
    {
      control: control, name: "cep", erro: errors.cep, placeholder: "CEP",
      keyboardType: "numeric", secureTextEntry: false
    },
    {
      control: control, name: "cidade", erro: errors.cidade, placeholder: "Cidade",
      keyboardType: "default", secureTextEntry: false
    },
  ];

  const lista_dados_botoes: BotaoProps[] = [
    { on_press: handleSubmit((onSubmit)), botao_texto_cor: 'white', botao_cor: 'blue', botao_texto: 'Salvar' },
    { on_press: () => reset(), botao_texto_cor: 'white', botao_cor: 'red', botao_texto: 'Limpar' },
    { on_press: () => navigation.goBack(), botao_texto_cor: 'white', botao_cor: 'green', botao_texto: 'Voltar' }
  ];

  return (
    <View style={styles.formulario_container}>
      <TituloContainer>
        <Titulo texto={titulo} />
      </TituloContainer>
      {lista_dados_campos.map((item, index) => {
        const { control, name, erro, placeholder, keyboardType, secureTextEntry } = item;
        return (
          <CampoInput
            key={index}
            control={control}
            name={name}
            erro={erro && <MensagemErro menssagem={erro.message} />}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />
        );
      })}
      <CampoSelect
        control={control}
        name="estado"
        isInvalid={"estado" in errors}
        mode="dialog"
        label_campo_selecione="Estado"
        data={lista_estados}
        placeholder="Estado"
        menssagem_erro={errors.estado?.message}
      />
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
