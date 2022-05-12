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
      control: control, name: "nome", menssagem_erro: errors.nome?.message, placeholder: "Nome",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "nome" in errors,
    },
    {
      control: control, name: "telefone", menssagem_erro: errors.telefone?.message, placeholder: "Telefone",
      keyboardType: "phone-pad", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "telefone" in errors,
    },
    {
      control: control, name: "email", menssagem_erro: errors.email?.message, placeholder: "Email",
      keyboardType: "email-address", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "email" in errors,
    },
    {
      control: control, name: "senha", menssagem_erro: errors.senha?.message, placeholder: "Senha",
      keyboardType: "default", secureTextEntry: true, defaultValue: "", editable: true, isInvalid: "senha" in errors,
    },
    {
      control: control, name: "confirmacao_senha", menssagem_erro: errors.confirmacao_senha?.message, placeholder: "Repita a senha",
      keyboardType: "default", secureTextEntry: true, defaultValue: "", editable: true, isInvalid: "confirmacao_senha" in errors,
    },
    {
      control: control, name: "rua", menssagem_erro: errors.rua?.message, placeholder: "Rua",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "rua" in errors,
    },
    {
      control: control, name: "bairro", menssagem_erro: errors.bairro?.message, placeholder: "Bairro",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "bairro" in errors,
    },
    {
      control: control, name: "numero", menssagem_erro: errors.numero?.message, placeholder: "Numero",
      keyboardType: "numeric", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "numero" in errors,
    },
    {
      control: control, name: "cep", menssagem_erro: errors.cep?.message, placeholder: "CEP",
      keyboardType: "numeric", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "cep" in errors,
    },
    {
      control: control, name: "cidade", menssagem_erro: errors.cidade?.message, placeholder: "Cidade",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "cidade" in errors,
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
        const { control, name, isInvalid, placeholder, keyboardType, secureTextEntry,
          editable, menssagem_erro, defaultValue } = item;
        return (
          <CampoInput
            key={index}
            control={control}
            name={name}
            isInvalid={isInvalid}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            editable={editable}
            menssagem_erro={menssagem_erro}
            defaultValue={defaultValue}
          />
        );
      })}
      <CampoSelect
        control={control}
        name="estado"
        isInvalid={"estado" in errors}
        label_campo_selecione="Estado"
        data={lista_estados}
        placeholder="Estado"
        menssagem_erro={errors.estado?.message}
        defaultValue=""
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
