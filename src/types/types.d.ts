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
  ingredientes: Ingredientes[];
}

interface ListaRefeicaoTypes extends RefeicaoBaseTypes {
  id: string;
}

interface Ingredientes {
  nome: string;
}