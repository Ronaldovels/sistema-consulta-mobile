/**
 * =============================================================================
 * ESTILOS: Tela de escolha do medico (fluxo do paciente)
 * =============================================================================
 *
 * Separados da logica para facilitar manutencao e reuso.
 * A tela em si (src/screens/paciente/EscolhaMedicoScreen.tsx) cuida apenas de JSX e logica.
 *
 * Regra: este arquivo so importa StyleSheet - nada de React, nada de logica,
 * nada de chamadas a API. E um arquivo de aparencia pura.
 *
 * =============================================================================
 */
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#79059C" },
  listContent: { padding: 20, paddingBottom: 40 },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardTextos: { flex: 1 },
  cardNome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardCrm: { fontSize: 13, color: "#888", marginTop: 2 },
  cardValor: { fontSize: 14, color: "#27ae60", fontWeight: "600", marginTop: 4 },
  cardSeta: { fontSize: 18, color: "#79059C", marginLeft: 8 },
  vazio: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    marginTop: 20,
  },
  vazioTexto: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
