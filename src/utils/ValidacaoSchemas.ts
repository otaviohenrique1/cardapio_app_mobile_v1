import * as Yup from "yup";
import { Mensagem } from "./Mensagem";
import {
  valor_minimo_ingredientes,
  MINIMO_INGREDIENTES,
  EMAIL_INVALIDO,
  valor_minimo_carateres,
  MINIMO_CARACTERES,
  valor_maximo_carateres,
  MAXIMO_CARACTERES
} from "./constantes";

export const nome = Yup
  .string()
  .required(Mensagem.MensagemErro("nome"));

export const email = Yup
  .string()
  .email(Mensagem.MensagemSimples(EMAIL_INVALIDO))
  .required(Mensagem.MensagemErro("email"));

export const senha = Yup
  .string()
  .min(valor_minimo_carateres, MINIMO_CARACTERES)
  .max(valor_maximo_carateres, MAXIMO_CARACTERES)
  .required(Mensagem.MensagemErro("senha"));

export const confirmacao_senha = Yup
  .string()
  .when("senha", {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("senha")],
      "As senhas não são iguais!"
    )
  });

export const preco = Yup
  .number()
  .moreThan(0, Mensagem.MensagemErro("preco"))
  .required(Mensagem.MensagemErro("preco"));

export const quantidade = Yup
  .number()
  .required(Mensagem.MensagemErro("nome"));

export const ingredientes = Yup
  .array()
  .of(
    Yup.object().shape({
      nome, quantidade
    })
  )
  .min(valor_minimo_ingredientes, MINIMO_INGREDIENTES)
  .required(Mensagem.MensagemErro("ingredientes"));

export const rua = Yup
  .string()
  .required(Mensagem.MensagemErro("rua"));

export const numero = Yup
  .string()
  .required(Mensagem.MensagemErro("numero"));

export const bairro = Yup
  .string()
  .required(Mensagem.MensagemErro("bairro"));

export const cidade = Yup
  .string()
  .required(Mensagem.MensagemErro("cidade"));

export const estado = Yup
  .string()
  .required(Mensagem.MensagemErro("estado"));

export const cep = Yup
  .string()
  .required(Mensagem.MensagemErro("cep"));

export const telefone = Yup
  .string()
  .required(Mensagem.MensagemErro("telefone"));

export const validacaoSchemaFormularioRefeicao = Yup
  .object()
  .shape({
    nome, preco, ingredientes
  });

export const validacaoSchemaFormularioUsuario = Yup
  .object()
  .shape({
    nome, email, senha, confirmacao_senha
  });

export const schemaValidacaoFormularioLogin = Yup
  .object()
  .shape({
    email, senha,
  });

export const validacaoSchemaCliente = Yup.object({
  nome, email, senha, confirmacao_senha, rua,
  numero, bairro, cidade, estado, cep, telefone,
});