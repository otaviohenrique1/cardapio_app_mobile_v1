import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { BotaoContainer, Container } from '../../components/Container';
import api from '../../utils/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { MensagemErro } from '../../components/MensagemErro';
import { Subtitulo, Titulo, TituloContainer } from '../../components/Titulo';
import { Botao } from '../../components/Botao';
import { CampoInput } from '../../components/Campos/CampoInput';
import { sha512 } from '../../utils/utils';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

interface FormTypes {
  email: string;
  senha: string;
}

const validacaoSchema = Yup.object({
  email: Yup
    .string()
    .email('Email invalido')
    .required('Campo email vazio'),
  senha: Yup
    .string()
    .required('Campo senha vazio')
    .min(8, 'Minimo de 8 caracteres')
    .max(32, 'Maximo de 32 caracteres'),
});

const valoresIniciais: FormTypes = {
  email: '',
  senha: ''
};

export function Login({ navigation }: NavigationProps) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormTypes>({
    defaultValues: valoresIniciais,
    resolver: yupResolver(validacaoSchema)
  });

  function onSubmit(values: FormTypes) {
    let email = values.email;
    let senha = sha512(values.senha);
    api.post('cliente/login',
      { email, senha },
      { auth: { username: email, password: senha } }
    ).then((data) => {
      // const id = data.data.data_user.id;
      // const nome = data.data.data_user.nome;
      navigation.navigate('HomePage');
    }).catch((error) => {
      Alert.alert("Login inválido");
      alert("Login inválido");
      console.error(error);
    });
    // console.log(`
    //   email: ${email}
    //   senha: ${senha}
    // `);
  };

  return (
    <Container>
      <TituloContainer>
        <Titulo texto="Cardapio" />
        <Subtitulo texto="Digital" />
      </TituloContainer>
      <CampoInput
        control={control}
        name="email"
        erro={errors.email && <MensagemErro menssagem={errors.email.message} />}
        placeholder="Email"
        keyboardType="email-address"
      />
      <CampoInput
        control={control}
        name="senha"
        erro={errors.senha && <MensagemErro menssagem={errors.senha.message} />}
        placeholder="Senha"
        keyboardType="default"
        secureTextEntry
      />
      <BotaoContainer>
        <Botao
          on_press={handleSubmit((onSubmit))}
          botao_texto_cor='white'
          botao_cor='blue'
          botao_texto='Entrar'
        />
        <Botao
          on_press={() => reset()}
          botao_texto_cor='white'
          botao_cor='red'
          botao_texto='Limpar'
        />
        <Botao
          on_press={() => navigation.navigate('NovoUsuario')}
          botao_texto_cor='white'
          botao_cor='green'
          botao_texto='Novo Usuario'
        />
      </BotaoContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  campo: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    fontSize: 25,
  },
  botao: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 1,
    padding: 10,
  },
  botao_texto: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  botao_entrar: {
    backgroundColor: 'blue',
  },
  botao_limpar: {
    backgroundColor: 'red',
  },
  botao_novo: {
    backgroundColor: 'green',
  },
});
