import React from 'react';
import { StyleSheet, TextInput, Alert } from 'react-native';
import { BotaoContainer, CampoContainer, Container } from '../../components/Container';
import api from '../../utils/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Botao } from '../../components/Botao';
import { MensagemErro } from '../../components/MensagemErro';
import { Titulo, TituloContainer } from '../../components/Titulo';
import { format } from 'date-fns';
import { sha512 } from '../../utils/utils';
import { CampoInput } from '../../components/Campos/CampoInput';
import { CampoSelect } from '../../components/Campos/CampoSelect';
import { lista_estados } from '../../utils/listas';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

interface FormTypes {
  email: string;
  senha: string;
  nome: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
  // estado2: string;
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
  nome: Yup
    .string()
    .required('Campo nome vazio'),
  rua: Yup
    .string()
    .required('Campo rua vazio'),
  numero: Yup
    .string()
    .required('Campo numero vazio'),
  bairro: Yup
    .string()
    .required('Campo bairro vazio'),
  cidade: Yup
    .string()
    .required('Campo cidade vazio'),
  estado: Yup
    .string()
    .required('Campo estado vazio'),
  cep: Yup
    .string()
    .required('Campo cep vazio'),
  telefone: Yup
    .string()
    .required('Campo telefone vazio'),
  // estado2: Yup
  //   .string()
  //   .required('Campo estado vazio'),
});

const valoresIniciais: FormTypes = {
  email: '', senha: '', nome: '', rua: '', numero: '', bairro: '',
  cidade: '', estado: '', cep: '', telefone: '',
  // estado2: ''
};

export function NovoUsuario({ navigation }: NavigationProps) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormTypes>({
    defaultValues: valoresIniciais,
    resolver: yupResolver(validacaoSchema)
  });

  async function onSubmit(values: FormTypes) {
    let email = values.email;
    let senha = sha512(values.senha);
    let nome = values.nome;
    let rua = values.rua;
    let numero = values.numero;
    let bairro = values.bairro;
    let cidade = values.cidade;
    let estado = values.estado;
    let cep = values.cep;
    let telefone = values.telefone;
    let data_cadastro = format(new Date(), 'yyyy-MM-dd');
    let data_modificacao_cadastro = format(new Date(), 'yyyy-MM-dd');

    let data = {
      email, senha, nome, rua, numero, bairro, cidade,
      estado, cep, telefone, data_cadastro, data_modificacao_cadastro
    };

    await api.post('/cliente', data)
      .then(() => {
        Alert.alert('Salvo');
        navigation.navigate('Login');
      })
      .catch((erro) => {
        Alert.alert('Erro');
        console.error(erro);
      });

    // console.log(values.estado2);
    
  };

  return (
    <Container>
      <TituloContainer>
        <Titulo texto="Novo usuario" />
      </TituloContainer>
      <CampoInput
        control={control}
        name="nome"
        erro={errors.nome && <MensagemErro menssagem={errors.nome.message} />}
        placeholder="Nome"
        keyboardType="default"
      />
      <CampoInput
        control={control}
        name="telefone"
        erro={errors.telefone && <MensagemErro menssagem={errors.telefone.message} />}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />
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
      <CampoInput
        control={control}
        name="rua"
        erro={errors.rua && <MensagemErro menssagem={errors.rua.message} />}
        placeholder="Rua"
        keyboardType="default"
      />
      <CampoInput
        control={control}
        name="bairro"
        erro={errors.bairro && <MensagemErro menssagem={errors.bairro.message} />}
        placeholder="Bairro"
        keyboardType="default"
      />
      <CampoInput
        control={control}
        name="numero"
        erro={errors.numero && <MensagemErro menssagem={errors.numero.message} />}
        placeholder="Numero"
        keyboardType="numeric"
      />
      <CampoInput
        control={control}
        name="cep"
        erro={errors.cep && <MensagemErro menssagem={errors.cep.message} />}
        placeholder="CEP"
        keyboardType="numeric"
      />
      <CampoInput
        control={control}
        name="cidade"
        erro={errors.cidade && <MensagemErro menssagem={errors.cidade.message} />}
        placeholder="Cidade"
        keyboardType="default"
      />
      {/* <CampoInput
        control={control}
        name="estado"
        erro={errors.estado && <MensagemErro menssagem={errors.estado.message} />}
        placeholder="Estado"
        keyboardType="default"
      /> */}
      <CampoSelect
        control={control}
        name="estado"
        erro={errors.estado && <MensagemErro menssagem={errors.estado.message} />}
        placeholder="Estado"
        mode="dialog"
        label_campo_selecione="Estado"
        data={lista_estados}
      />
      <BotaoContainer>
        <Botao
          on_press={handleSubmit((onSubmit))}
          botao_texto_cor='white'
          botao_cor='blue'
          botao_texto='Salvar'
        />
        <Botao
          on_press={() => reset()}
          botao_texto_cor='white'
          botao_cor='red'
          botao_texto='Limpar'
        />
        <Botao
          on_press={() => navigation.navigate('Login')}
          botao_texto_cor='white'
          botao_cor='green'
          botao_texto='Voltar'
        />
      </BotaoContainer>
    </Container>
  );
}

const styles = StyleSheet.create({});

/*
import React from 'react';
import { StyleSheet, TextInput, Alert } from 'react-native';
import { BotaoContainer, CampoContainer, Container } from '../../components/Container';
import api from '../../utils/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Botao } from '../../components/Botao';
import { MensagemErro } from '../../components/MensagemErro';
import { Titulo, TituloContainer } from '../../components/Titulo';
import { format } from 'date-fns';
import { sha512 } from '../../utils/utils';
import { CampoInput } from '../../components/CampoInput';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

interface FormTypes {
  email: string;
  senha: string;
  nome: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
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
  nome: Yup
    .string()
    .required('Campo nome vazio'),
  rua: Yup
    .string()
    .required('Campo rua vazio'),
  numero: Yup
    .string()
    .required('Campo numero vazio'),
  bairro: Yup
    .string()
    .required('Campo bairro vazio'),
  cidade: Yup
    .string()
    .required('Campo cidade vazio'),
  estado: Yup
    .string()
    .required('Campo estado vazio'),
  cep: Yup
    .string()
    .required('Campo cep vazio'),
  telefone: Yup
    .string()
    .required('Campo telefone vazio'),
});

const valoresIniciais: FormTypes = { email: '', senha: '', nome: '', rua: '', numero: '', bairro: '',
  cidade: '', estado: '', cep: '', telefone: '' };

export function NovoUsuario({ navigation }: NavigationProps) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormTypes>({
    defaultValues: valoresIniciais,
    resolver: yupResolver(validacaoSchema)
  });

  async function onSubmit(values: FormTypes) {
    let email = values.email;
    let senha = sha512(values.senha);
    let nome = values.nome;
    let rua = values.rua;
    let numero = values.numero;
    let bairro = values.bairro;
    let cidade = values.cidade;
    let estado = values.estado;
    let cep = values.cep;
    let telefone = values.telefone;
    let data_cadastro = format(new Date(), 'yyyy-MM-dd');
    let data_modificacao_cadastro = format(new Date(), 'yyyy-MM-dd');

    let data = { email, senha, nome, rua, numero, bairro, cidade,
      estado, cep, telefone, data_cadastro, data_modificacao_cadastro };

    await api.post('/cliente', data)
      .then(() => {
        Alert.alert('Salvo');
        navigation.navigate('Login');
      })
      .catch((erro) => {
        Alert.alert('Erro');
        console.error(erro);
      });
  };

  return (
    <Container>
      <TituloContainer>
        <Titulo texto="Novo usuario" />
      </TituloContainer>
      <CampoInput
        control={control}
        name="nome"
        erro={errors.nome && <MensagemErro menssagem={errors.nome.message} />}
        placeholder="Nome"
        keyboardType="default"
      />
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nome"
            />
          )}
          name="nome"
        />
        {errors.nome && <MensagemErro menssagem={errors.nome.message} />}
      </CampoContainer>
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Telefone"
              keyboardType='phone-pad'
            />
          )}
          name="telefone"
        />
        {errors.telefone && <MensagemErro menssagem={errors.telefone.message} />}
      </CampoContainer>
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              keyboardType='email-address'
            />
          )}
          name="email"
        />
        {errors.email && <MensagemErro menssagem={errors.email.message} />}
      </CampoContainer>
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Senha"
            />
          )}
          name="senha"
        />
        {errors.senha && <MensagemErro menssagem={errors.senha.message} />}
      </CampoContainer>
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Rua"
            />
          )}
          name="rua"
        />
        {errors.rua && <MensagemErro menssagem={errors.rua.message} />}
      </CampoContainer>
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Bairro"
            />
          )}
          name="bairro"
        />
        {errors.bairro && <MensagemErro menssagem={errors.bairro.message} />}
      </CampoContainer>
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Numero"
              keyboardType='numeric'
            />
          )}
          name="numero"
        />
        {errors.numero && <MensagemErro menssagem={errors.numero.message} />}
      </CampoContainer>
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="CEP"
              keyboardType='numeric'
            />
          )}
          name="cep"
        />
        {errors.cep && <MensagemErro menssagem={errors.cep.message} />}
      </CampoContainer>
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Cidade"
            />
          )}
          name="cidade"
        />
        {errors.cidade && <MensagemErro menssagem={errors.cidade.message} />}
      </CampoContainer>
      <CampoContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Estado"
            />
          )}
          name="estado"
        />
        {errors.estado && <MensagemErro menssagem={errors.estado.message} />}
      </CampoContainer>
      <BotaoContainer>
        <Botao
          on_press={handleSubmit((onSubmit))}
          botao_texto_cor='white'
          botao_cor='blue'
          botao_texto='Salvar'
        />
        <Botao
          on_press={() => reset()}
          botao_texto_cor='white'
          botao_cor='red'
          botao_texto='Limpar'
        />
        <Botao
          on_press={() => navigation.navigate('Login')}
          botao_texto_cor='white'
          botao_cor='green'
          botao_texto='Voltar'
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
  botao_container: {
    flexDirection: 'column'
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
  botao_salvar: {
    backgroundColor: 'blue',
  },
  botao_limpar: {
    backgroundColor: 'red',
  },
  botao_voltar: {
    backgroundColor: 'green',
  },
});
*/
