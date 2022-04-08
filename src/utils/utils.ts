import { SHA512, enc } from "crypto-js";

export function FormataValorMonetarioTexto(valor: number) {
  return valor.toFixed(2).toString().replace('.', ',');
}

export function ConverteStringParaArrayObjetos2(texto: string) {
  return JSON.parse(texto);
}

export function sha512(senha: string) {
  return SHA512(senha).toString(enc.Hex);
}