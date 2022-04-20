import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Botao } from '../../components/Botao';
import { Container } from '../../components/Container';
import { BotaoContainer } from "../../components/Container/BotaoContainer";
import { MensagemErro } from '../../components/MensagemErro';
import { Titulo } from '../../components/Titulo';
import { TituloContainer } from "../../components/Container/TituloContainer";
import { CampoInput } from '../../components/Campos/CampoInput';
import { CampoSelect } from '../../components/Campos/CampoSelect';
import api from '../../utils/api';
import { lista_estados } from '../../utils/listas';
import { validacaoSchemaCliente } from '../../utils/ValidacaoSchemas';
import { FormatadorDados } from '../../utils/FormatadorDados';
import { FORMATO_DATA_COM_HORA_3, valoresIniciaisCliente } from '../../utils/constantes';
import { FormatadorCrypto } from '../../utils/FormatadorCrypto';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function NovoUsuario({ navigation }: NavigationProps) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<ClienteTypes>({
    defaultValues: valoresIniciaisCliente,
    resolver: yupResolver(validacaoSchemaCliente)
  });

  async function onSubmit(values: ClienteTypes) {
    const { email, senha, nome, rua, numero, bairro, cidade, estado, cep, telefone } = values;

    let senha_formatada = FormatadorCrypto.mensagemSHA512(senha);
    let data_formatado = FormatadorDados.GeradorDataHoraFormatada(FORMATO_DATA_COM_HORA_3);

    let data = {
      email, senha: senha_formatada,
      nome, rua, numero, bairro, cidade,
      estado, cep, telefone,
      data_cadastro: data_formatado,
      data_modificacao_cadastro: data_formatado
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
