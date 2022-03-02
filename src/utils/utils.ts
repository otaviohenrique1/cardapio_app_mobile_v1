export function FormataValorMonetarioTexto(valor: number) {
  return valor.toFixed(2).toString().replace('.', ',');
}

export function ConverteStringParaArrayObjetos2(texto: string) {
  return JSON.parse(texto);
}