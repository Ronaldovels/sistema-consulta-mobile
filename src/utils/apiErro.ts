import axios from "axios";

/**
 * Extrai a mensagem de erro que o backend Spring devolve.
 *
 * O ApiExceptionHandler responde sempre no mesmo formato:
 *   { "erro": "CRM ja cadastrado." }
 *
 * Se a resposta nao trouxer essa chave (servidor fora do ar, timeout,
 * erro 500 inesperado), usamos a mensagem padrao passada pela tela.
 */
export function extrairMensagemErro(erro: unknown, padrao: string): string {
  if (axios.isAxiosError(erro)) {
    const dados = erro.response?.data as { erro?: string } | undefined;
    if (dados?.erro) {
      return dados.erro;
    }
    // Sem response = nao chegou no servidor (rede, URL errada, timeout)
    if (!erro.response) {
      return "Nao foi possivel falar com o servidor. Verifique sua conexao.";
    }
  }
  return padrao;
}
