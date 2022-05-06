export const EMAIL_INVALIDO = "Email invalido";
export const valor_minimo_carateres = 8;
export const MINIMO_CARACTERES = `Minimo ${valor_minimo_carateres} carateres`;
export const valor_maximo_carateres = 64;
export const MAXIMO_CARACTERES = `Maximo ${valor_maximo_carateres} carateres`;
export const valor_minimo_ingredientes = 1;
export const MINIMO_INGREDIENTES = `Minimo ${valor_minimo_ingredientes} carateres`;

export const FORMATO_HORA_1 = 'HH:mm';
export const FORMATO_HORA_2 = 'HH:mm:ss';
export const FORMATO_DATA_1 = 'dd/MM/yyyy';
export const FORMATO_DATA_2 = 'yyyy-MM-dd';
export const FORMATO_DATA_COM_HORA_1 = 'yyyy-MM-dd HH:mm';
export const FORMATO_DATA_COM_HORA_2 = 'dd/MM/yyyy HH:mm';
export const FORMATO_DATA_COM_HORA_3 = 'yyyy-MM-dd HH:mm:ss';
export const FORMATO_DATA_COM_HORA_4 = 'dd/MM/yyyy HH:mm:ss';

export const valoresIniciaisRefeicao: RefeicaoTypes = {
  nome: '',
  preco: 0,
  descricao: "",
  ingredientes: [
    { nome: '', quantidade: 0 }
  ],
};

export const valoresIniciaisLogin: LoginTypes = {
  email: '',
  senha: ''
};

export const valoresIniciaisCliente: ClienteTypes = {
  email: '', senha: '', nome: '', rua: '', numero: '',
  bairro: '', cidade: '', estado: '', cep: '', telefone: '',
  confirmacao_senha: "", id: "", data_cadastro: "", data_modificacao_cadastro: "",
  empresaId: ""
};