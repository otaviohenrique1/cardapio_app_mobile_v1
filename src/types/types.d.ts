type DataHoraFormatos =
  "HH:mm" |
  "HH:mm:ss" |
  "dd/MM/yyyy" |
  "yyyy-MM-dd" |
  'yyyy-MM-dd HH:mm' |
  'dd/MM/yyyy HH:mm' |
  'yyyy-MM-dd HH:mm:ss' |
  'dd/MM/yyyy HH:mm:ss';

/* Parte do Login */
interface LoginTypes {
  email: string;
  senha: string;
}

interface UsuarioLogadoTypes {
  id: string;
  nome: string;
}

/* Parte do Usuario */
interface UsuarioTypes {
  nome: string;
  email: string;
  senha: string;
}

interface UsuarioDadosTypes extends UsuarioTypes {
  id: string;
  codigo: string;
  data_cadastro: string;
  data_modificacao_cadastro: string;
}

/* Parte da Refeicao */
interface RefeicaoBaseTypes {
  nome: string;
  preco: number;
}

interface RefeicaoTypes extends RefeicaoBaseTypes {
  ingredientes: IngredientesTypes[];
  descricao: string;
}

interface ListaRefeicaoTypes extends RefeicaoBaseTypes {
  id: string;
}

interface FotoTypes {
  id: string;
  url: string;
  nome: string;
}

interface IngredientesTypes {
  nome: string;
  quantidade: number;
}

interface IngredientesOpcionaisTypes {
  nome: string;
  preco: number;
}

interface ClienteTypes {
  email: string;
  senha: string;
  confirmacao_senha: string;
  nome: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
  id: string,
  data_cadastro: string;
  data_modificacao_cadastro: string;
  empresaId: string;
}

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
