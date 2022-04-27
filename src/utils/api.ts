import axios from "axios";

/**
 * Arrumar logica do ID da empresa cliente.
 * ID pego no banco de dados
 */
export const id_empresa_cliente = '1';

const api = axios.create({
  // baseURL: 'exp://57-b82.otaviohenls625.cardapio-app.exp.direct:80:3333'
  // exp://57-b82.otaviohenls625.cardapio-app.exp.direct:80
  // baseURL: 'http://192.168.0.11:3333'
  baseURL: 'http://localhost:3333/'
  // exp://192.168.0.11:19000
  // baseURL: 'http://localhost:3333'
});

export default api;

/* ApiBuscaLoginCliente */
export interface ApiBuscaLoginClienteTypes {
  data: { email: string; senha: string; };
  auth: { username: string; password: string; };
}

export function ApiBuscaLoginCliente(data_login: ApiBuscaLoginClienteTypes) {
  // api.post('cliente/login', data, { auth })
  const { data, auth } = data_login;
  return api.post('cliente/login', data, { auth });
}

/* ApiCadastroCliente */
export interface ApiCadastroClienteTypes {
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
  data_cadastro: string;
  data_modificacao_cadastro: string;
}

export function ApiCadastroCliente(data_cadastro: ApiCadastroClienteTypes) {
  // api.post('/cliente', data)
  return api.post('/cliente', data_cadastro);
}

/* ApiBuscaDadosUmaRefeicao */
export function ApiBuscaDadosUmaRefeicao(id: string) {
  // api.get(`refeicao/${id}`)
  return api.get(`refeicao/${id}`);
}

/* ApiBuscaDadosTodasRefeicoes */
export function ApiBuscaDadosTodasRefeicoes(id: string) {
  // api.get(`refeicao/cardapio/${id_empresa_cliente}`)
  return api.get(`refeicao/cardapio/${id}`);
}
