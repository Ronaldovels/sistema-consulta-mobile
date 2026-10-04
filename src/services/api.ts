import axios from "axios";

// =============================================================================
// CONFIGURAÇÃO DO AMBIENTE - TROQUE AQUI CONFORME O CENÁRIO
//
//  LOCAL (backend no seu computador):
//    const BASE_URL = "http://localhost:8080";
//
//  CELULAR FÍSICO → backend local na mesma rede Wi-Fi:
//    const BASE_URL = "http://192.168.x.x:8080";
//
//  APK com backend publicado no Render:
//    const BASE_URL = "https://backend-consultas-09rz.onrender.com";
// =============================================================================
const BASE_URL = "https://backend-consultas-09rz.onrender.com";

const api = axios.create({
 baseURL: BASE_URL,
 timeout: 15000, // 15s - cobre o cold start do Render free tier
 headers: {
 "Content-Type": "application/json",
 },
});

export default api;

/**
 * Verifica se o erro é causado por ausência de conexão com o servidor
 * (backend offline, sem internet, timeout, etc).
 *
 * Retorna true quando não há resposta HTTP - ou seja, a requisição
 * nem chegou ao servidor ou ele não respondeu dentro do timeout.
 */
export function isNetworkError(erro: unknown): boolean {
  return axios.isAxiosError(erro) && !erro.response;
}

/**
 * Faz um GET em /health e retorna true se o backend estiver acessível.
 * Usa timeout de 8s para cobrir o cold start do Render sem travar a tela.
 *
 * Usa o axios direto (e não a instancia `api`) para isolar o health check
 * de interceptadores que a instancia principal possa ganhar no futuro.
 */
export async function healthCheck(): Promise<boolean> {
  try {
    await axios.get(`${BASE_URL}/health`, { timeout: 8000 });
    return true;
  } catch {
    return false;
  }
}
