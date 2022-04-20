import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { MensagemErro } from '../../components/MensagemErro';
import { Container } from '../../components/Container';
import { BotaoContainer } from "../../components/Container/BotaoContainer";
import { Titulo } from '../../components/Titulo';
import { TituloContainer } from "../../components/Container/TituloContainer";
import { Subtitulo } from "../../components/Subtitulo";
import { Botao } from '../../components/Botao';
import { CampoInput } from '../../components/Campos/CampoInput';
import api from '../../utils/api';
import { schemaValidacaoFormularioLogin } from '../../utils/ValidacaoSchemas';
import { valoresIniciaisLogin } from '../../utils/constantes';
import { FormatadorCrypto } from '../../utils/FormatadorCrypto';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function Login({ navigation }: NavigationProps) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<LoginTypes>({
    defaultValues: valoresIniciaisLogin,
    resolver: yupResolver(schemaValidacaoFormularioLogin)
  });

  function onSubmit(values: LoginTypes) {
    const { email, senha } = values;
    let senha_formatada = FormatadorCrypto.mensagemSHA512(senha);
    const data = { email, senha: senha_formatada };
    const auth = {
      auth: {
        username: email,
        password: senha_formatada
      }
    };

    api.post('cliente/login', data, auth).
      then((data) => {
        const { id, nome } = data.data.data_user;
        navigation.navigate('HomePage');
      }).catch((error) => {
        const login_invalido = "Login inválido";
        Alert.alert(login_invalido);
        alert(login_invalido);
        console.error(error);
      });
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

const styles = StyleSheet.create({});
